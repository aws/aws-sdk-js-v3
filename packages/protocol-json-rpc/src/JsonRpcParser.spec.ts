import {JsonRpcParser} from './JsonRpcParser';
import {OperationModel, HttpResponse, ServiceException} from '@aws/types';
import {extractMetadata} from '@aws/response-metadata-extractor';

const operation: OperationModel = {
    http: {
        method: 'GET',
        requestUri: '/'
    },
    name: 'test',
    metadata: {
        apiVersion: '2017-06-28',
        endpointPrefix: 'foo',
        protocol: 'json',
        serviceFullName: 'AWS Foo Service',
        signatureVersion: 'v4',
        uid: 'foo-2017-06-28',
    },
    input: {
        shape: {
            type: 'structure',
            required: [],
            members: {},
        },
    },
    output: {
        shape: {
            type: 'structure',
            required: [],
            members: {},
        },
    },
    errors: [{
        shape: {
            type: 'structure',
            required: [],
            members: {
                Message: {shape: {type: 'string'}},
                Number: {shape: {type: 'integer'}}
            },
            exceptionType: 'StructureException'
        }
    },{
        shape: {
            type: 'structure',
            required: [],
            members: {
                Report: {
                    shape: {
                        type: 'map',
                        value: {shape: {type: 'string'}},
                        key: {shape: {type: 'string'}}
                    }
                }
            },
            exceptionCode: 'MapException'
        }
    }],
};

const response: HttpResponse = {
    statusCode: 200,
    headers: {},
    body: 'a string body'
};
const $metadata = extractMetadata(response);

describe('JsonRpcParser', () => {
    it(
        'should pass the operation output and HTTP response body to the body parser',
        async () => {
            const bodyParser = {
                parse: jest.fn(() => { return {}; })
            };

            const parser = new JsonRpcParser(
                bodyParser,
                jest.fn(),
                jest.fn(),
            );
            const parsed = await parser.parse(operation, response);
            expect(parsed).toEqual({$metadata});
            expect(bodyParser.parse.mock.calls.length).toBe(1);
            expect(bodyParser.parse.mock.calls[0]).toEqual([
                operation.output,
                'a string body'
            ]);
        }
    );
    it(
        'use an empty string for the body if none is included in the message',
        async () => {
            const bodyParser = {
                parse: jest.fn(() => { return {}; })
            };

            const parser = new JsonRpcParser(
                bodyParser,
                jest.fn(),
                jest.fn(),
            );
            const responseWithoutBody = {
                ...response,
                body: void 0
            }
            const parsed = await parser.parse(operation, responseWithoutBody);
            const $metadata = extractMetadata(responseWithoutBody)
            expect(parsed).toEqual({$metadata});
            expect(bodyParser.parse.mock.calls.length).toBe(1);
            expect(bodyParser.parse.mock.calls[0]).toEqual([
                operation.output,
                ''
            ]);
        }
    );

    it('should UTF-8 encode ArrayBuffer bodies', async () => {
        const bufferBody = new ArrayBuffer(0);
        const bodyParser = {
            parse: jest.fn(() => { return {}; })
        };
        const utf8Encoder = jest.fn(() => 'a string');

        const parser = new JsonRpcParser(
            bodyParser,
            jest.fn(),
            utf8Encoder,
        );

        await parser.parse(operation, {
            ...response,
            body: bufferBody
        });

        expect(utf8Encoder.mock.calls.length).toBe(1);
        expect(utf8Encoder.mock.calls[0][0].buffer).toBe(bufferBody);
        expect(bodyParser.parse.mock.calls.length).toBe(1);
        expect(bodyParser.parse.mock.calls[0]).toEqual([
            operation.output,
            'a string'
        ]);
    });

    it('should UTF-8 encode ArrayBufferView bodies', async () => {
        const bufferBody = new Int32Array(0);
        const bodyParser = {
            parse: jest.fn(() => { return {}; })
        };
        const utf8Encoder = jest.fn(() => 'a string');

        const parser = new JsonRpcParser(
            bodyParser,
            jest.fn(),
            utf8Encoder,
        );

        await parser.parse(operation, {
            ...response,
            body: bufferBody
        });

        expect(utf8Encoder.mock.calls.length).toBe(1);
        expect(utf8Encoder.mock.calls[0][0].buffer).toBe(bufferBody.buffer);
        expect(bodyParser.parse.mock.calls.length).toBe(1);
        expect(bodyParser.parse.mock.calls[0]).toEqual([
            operation.output,
            'a string'
        ]);
    });

    it('should collect and UTF-8 encode stream bodies', async () => {
        const streamBody = {chunks: [
            new Uint8Array([0xde, 0xad]),
            new Uint8Array([0xbe, 0xef]),
        ]};
        const collectedStream = new Uint8Array(0);
        const bodyParser = {
            parse: jest.fn(() => { return {}; })
        };
        const utf8Encoder = jest.fn(() => 'a string');
        const streamCollector = jest.fn(() => Promise.resolve(collectedStream));

        const parser = new JsonRpcParser<any>(
            bodyParser,
            streamCollector,
            utf8Encoder,
        );

        await parser.parse(operation, {
            ...response,
            body: streamBody
        });

        expect(streamCollector.mock.calls.length).toBe(1);
        expect(streamCollector.mock.calls[0][0]).toBe(streamBody);

        expect(utf8Encoder.mock.calls.length).toBe(1);
        expect(utf8Encoder.mock.calls[0][0].buffer).toBe(collectedStream.buffer);

        expect(bodyParser.parse.mock.calls.length).toBe(1);
        expect(bodyParser.parse.mock.calls[0]).toEqual([
            operation.output,
            'a string'
        ]);
    });

    describe('Service Exception Parser', () => {
        const bodyParser = {
            parse: jest.fn(() => { return 'ThisIsBody'; })
        };
        const parser = new JsonRpcParser<any>(
            bodyParser,
            jest.fn(() => {}),
            jest.fn(() => {}),
        );
        const response: HttpResponse = {
            statusCode: 403,
            headers: {'x-amzn-errortype': 'StructureException'},
            body: 'MockException'
        }
        const exceptionFixture: ServiceException = {
            $metadata: {
                httpResponse: response,
                cfId: undefined,
                extendedRequestId: undefined,
                requestId: undefined
            },
            name: 'StructureException',
            message: '',
            details: 'ThisIsBody'
        }

        it('should throw exception when no body or header is provided', async function() {
            let badResponse: HttpResponse = {
                statusCode: 400,
                headers: {}
            }
            try {
                await parser.parse(operation, badResponse);
            } catch(e) {
                expect(e.name).toEqual('Error');
                expect(e.message).toBe('');
                expect(e.details).toBe(undefined);
                expect(e.$metadata.httpResponse).toEqual({
                    ...badResponse,
                    body: ''
                });
            }
        })

        it('should parse exception from header', async function() {
            let badResponse: HttpResponse = {
                ...response,
                body: undefined
            };
            try {
                await parser.parse(operation, badResponse);
            } catch (e) {
                expect(e.$metadata).toEqual({
                    ...exceptionFixture.$metadata,
                    httpResponse: {
                        ...badResponse,
                        body: ''
                    }
                })
                expect(e.name).toEqual('StructureException');
                expect(bodyParser.parse).toBeCalled();
            }
            
        });

        it('should parse exception from body', async function() {
            let badResponse: HttpResponse = {
                ...response,
                headers: {},
                body: '{\"code\": \"StructureException\"}'
            };
            try {
                await parser.parse(operation, badResponse);
            } catch(e) {
                expect(e.name).toEqual('StructureException');
                expect(bodyParser.parse).toBeCalled();
                expect(e.$metadata).toEqual({...exceptionFixture.$metadata, httpResponse: badResponse})
            }
        });

        it('should choose right service exception to parse', async function() {
            let badResponse: HttpResponse = {
                ...response,
                headers: {},
                body: '{\"code\": \"MapException\"}'
            };
            try {
                await parser.parse(operation, badResponse);
            } catch(e) {
                expect(e.name).toEqual('MapException');
                expect(bodyParser.parse).toBeCalled();
                expect(e.$metadata).toEqual({...exceptionFixture.$metadata, httpResponse: badResponse})
            }
        });

        it('should infer exception name and message for exceptions not from API', async function() {
            let badResponse: HttpResponse = {
                ...response,
                headers: {'x-amzn-errortype': 'MockException'},
                body: '{\"message\": \"This Is A MockException\"}'
            };
            try {
                await parser.parse(operation, badResponse);
            } catch(e) {
                expect(e.name).toEqual('MockException');
                expect(e.message).toEqual('This Is A MockException')
            }
        })

        it('should throw unparsable exception when cannot extract exception', async function() {
            let badResponse: HttpResponse = {
                ...response,
                headers: {},
                body: '{\"name\": \"MockException\"}'
            };
            try {
                await parser.parse(operation, badResponse);
            } catch(e) {
                expect(e.name).toEqual('Error');
                expect(bodyParser.parse).toBeCalled();
                expect(e.$metadata).toEqual({...exceptionFixture.$metadata, httpResponse: badResponse})
            }
        })
    })
});
