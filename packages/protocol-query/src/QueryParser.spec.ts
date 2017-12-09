import {QueryParser} from './QueryParser';
import {OperationModel, HttpResponse, Member, Structure} from '@aws/types';
import {extractMetadata} from '@aws/response-metadata-extractor';
import {XMLParser} from '@aws/xml-parser';

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
            required: ['Type'],
            members: {
                Type: {shape: {type: 'string'}},
            },
            exceptionType: 'ConfigurationSetDoesNotExist'
        },
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

            const unmarshaller = new QueryParser(
                bodyParser,
                jest.fn(),
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
            const unmarshaller = new QueryParser(
                bodyParser,
                jest.fn(),
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
    });

    it(
        'should use an empty string for the body if none is included in the message',
        async () => {
            const bodyParser = {
                parse: jest.fn(() => { return {}; })
            };

            const parser = new QueryParser(
                bodyParser,
                jest.fn(),
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

        const parser = new QueryParser(
            bodyParser,
            jest.fn(),
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

        const parser = new QueryParser(
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
            operation.input,
            '<xml></xml>'
        ]);
    });

    it('should UTF-8 encode streaming bodies', async () => {
        /**
         * A stream type the parser does not understand natively
         */
        class ExternalStream {}

        const bodyParser = {
            parse: jest.fn(() => { return {}; })
        };
        const collector = jest.fn(() => Promise.resolve(new Uint8Array(0)));
        const utf8Encoder = jest.fn(() => '<xml></xml>');

        const parser = new QueryParser<ExternalStream>(
            bodyParser,
            collector,
            utf8Encoder
        );
        
        await parser.parse(operation, {
            ...response,
            body: new ExternalStream()
        });

        expect(utf8Encoder.mock.calls.length).toBe(1);
        expect(utf8Encoder.mock.calls[0][0]).toMatchObject(new Uint8Array(0));
        expect(collector.mock.calls.length).toBe(1);
        expect(collector.mock.calls[0][0]).toMatchObject(new ExternalStream());
        expect(bodyParser.parse.mock.calls.length).toBe(1);
        expect(bodyParser.parse.mock.calls[0]).toEqual([
            operation.input,
            '<xml></xml>'
        ]);
    });

    describe('Query Error Unmarshaller', () => {
        const errorResponse: HttpResponse = {
            statusCode: 400,
            headers: {},
            body: 
`<ErrorResponse xmlns="http://ses.amazonaws.com/doc/2010-12-01/">
    <Error>
        <Code>ConfigurationSetDoesNotExist</Code>
        <Message>Configuration set does not exist.</Message>
        <Type>Sender</Type>
    </Error>
    <RequestId>911</RequestId>
</ErrorResponse>`
        };

        it('should correctly parse error name and message that are not modeled in API', async () => {
            const bodyParser = {
                parse: jest.fn((errorShape: Member, _) => {
                    const error = (errorShape.shape as Structure).members.Error;
                    if ((error.shape as Structure).members.Code) {
                        //output for parsing error code
                        return {
                            Error: {
                                Code: 'ConfigurationSetDoesNotExist',
                                Message: 'Configuration set does not exist.'
                            },
                            $metadata: {requestId: '911'}
                        }
                    } else {
                        //output for parsing error owned properties
                        return {
                            Error: {Type: 'Sender'},
                            $metadata: {requestId: '911'}
                        }
                    }
                }
            )};
            const parser = new QueryParser(
                bodyParser,
                jest.fn(),
                jest.fn(),
            );
            try {
                await parser.parse(operation, errorResponse);
            } catch(e) {
                expect(bodyParser.parse.mock.calls.length).toBe(operation.errors.length + 1);
                expect(e.name).toEqual('ConfigurationSetDoesNotExist');
                expect(e.message).toEqual('Configuration set does not exist.');
                expect(e.$metadata.requestId).toEqual('911');
                expect(e.details).toEqual({Type: 'Sender'});
            }  
        })

        it('should parse unknown type of exception', async () => {
            const bodyParser = {parse: jest.fn(() => {
                return {$metadata: {requestId: '911'}}
            })};
            const parser = new QueryParser(
                bodyParser,
                jest.fn(),
                jest.fn(),
            );
            const unknownResponse: HttpResponse = {...errorResponse, body: '<UnknownOperationException/>'}
            try {
                await parser.parse(operation, unknownResponse);
            } catch(e) {
                expect(e.name).toEqual('Error');
            }
        });

        it('should parse parsable errors not modeled in API', async () => {
            const errorsOwnPropertiesOutput = jest.fn()
            const bodyParser = {
                parse: jest.fn((errorShape: Member, _) => {
                    const error = (errorShape.shape as Structure).members.Error;
                    if ((error.shape as Structure).members.Code) {
                        //output for parsing error code
                        return {
                            Error: {
                                Code: 'ValidationException',
                                Message: 'parameter ID is not correct.'
                            },
                            $metadata: {requestId: '911'}
                        }
                    } else {
                        //output for parsing error owned properties
                        errorsOwnPropertiesOutput();
                    }
                }
            )};
            const parser = new QueryParser(
                bodyParser,
                jest.fn(),
                jest.fn(),
            );
            try {
                await parser.parse(operation, errorResponse);
            } catch(e) {
                expect(bodyParser.parse.mock.calls.length).toBe(1);
                expect(errorsOwnPropertiesOutput.mock.calls.length).toBe(0);
                expect(e.name).toEqual('ValidationException');
                expect(e.message).toEqual('parameter ID is not correct.');
                expect(e.$metadata.requestId).toEqual('911');
            }  
        })
    })
});
