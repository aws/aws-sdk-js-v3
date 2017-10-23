import {QueryUnmarshaller} from '.';
import {OperationModel, HttpResponse} from '@aws/types';
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
        protocol: 'ec2',
        serviceFullName: 'AWS Foo Service',
        signatureVersion: 'v4',
        uid: 'foo-2017-09-22',
    },
    input: {
        shape: {
            type: 'structure',
            required: [],
            members: {},
        }
    },
    output: {
        shape: {
            type: 'structure',
            required: [],
            members: {},
        }
    },
    errors: [{
        shape: {
            type: 'structure',
            required: ['Code', 'Message'],
            members: {
                Code: {shape: {type: 'string'}},
                Message: {shape: {type: 'string'}}
            }
        }
    }],
};

const response: HttpResponse = {
    statusCode: 200,
    headers: {},
    body: '<OperationRespond>body</OperationRespond>'
};
const $metadata = extractMetadata(response);

describe('QueryUnmarshaller', () => {
    it('should pass the operation output and HTTP response body to the body parser',
        async () => {
            const bodyParser = {
                parse: jest.fn(() => {return {};})
            }

            const unmarshaller = new QueryUnmarshaller(
                bodyParser,
                jest.fn(),
            );
            const parsed = await unmarshaller.parse(operation, response);
            expect(parsed).toEqual({$metadata});
            expect(bodyParser.parse.mock.calls.length).toBe(1);
            expect(bodyParser.parse.mock.calls[0]).toEqual([
                operation.input,
                '<OperationRespond>body</OperationRespond>'
            ]);
        }
    );
    it('should load the requestId from body to metadata', () => {
        async () => {
            const bodyParser = {
                parse: jest.fn(() => {
                    return {
                        $metadata: {
                            requestId: 'request-id'
                        }
                    }
                })
            }
            const unmarshaller = new QueryUnmarshaller(
                bodyParser,
                jest.fn(),
            );
            const parsed = await unmarshaller.parse(operation, response);
            expect(parsed.$metadata.requestId).toEqual('request-id');
            expect(bodyParser.parse.mock.calls.length).toBe(1);
            expect(bodyParser.parse.mock.calls[0]).toEqual([
                operation.input,
                '<OperationRespond>body</OperationRespond>'
            ]);
        }
    })
    it(
        'use an empty string for the body if none is included in the message',
        async () => {
            const bodyParser = {
                parse: jest.fn(() => { return {}; })
            };

            const parser = new QueryUnmarshaller(
                bodyParser,
                jest.fn(),
            );
            const responseWithoutBody = {
                ...response,
                body: void 0
            }
            const parsed = await parser.parse(operation, responseWithoutBody);
            const $metadata = extractMetadata(responseWithoutBody);
            expect(parsed).toEqual({$metadata});
            expect(bodyParser.parse.mock.calls.length).toBe(1);
            expect(bodyParser.parse.mock.calls[0]).toEqual([
                operation.input,
                ''
            ]);
        }
    );

    it('should UTF-8 encode ArrayBuffer bodies', async () => {
        const bufferBody = new ArrayBuffer(0);
        const bodyParser = {
            parse: jest.fn(() => { return {}; })
        };
        const utf8Encoder = jest.fn(() => '<xml></xml>');

        const parser = new QueryUnmarshaller(
            bodyParser,
            utf8Encoder
        );

        await parser.parse(operation, {
            ...response,
            body: bufferBody
        });

        expect(utf8Encoder.mock.calls.length).toBe(1);
        expect(utf8Encoder.mock.calls[0][0].buffer).toBe(bufferBody);
        expect(bodyParser.parse.mock.calls.length).toBe(1);
        expect(bodyParser.parse.mock.calls[0]).toEqual([
            operation.input,
            '<xml></xml>'
        ]);
    });

    it('should UTF-8 encode ArrayBufferView bodies', async () => {
        const bufferBody = new Int32Array(0);
        const bodyParser = {
            parse: jest.fn(() => { return {}; })
        };
        const utf8Encoder = jest.fn(() => '<xml></xml>');

        const parser = new QueryUnmarshaller(
            bodyParser,
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
            operation.input,
            '<xml></xml>'
        ]);
    });
});
