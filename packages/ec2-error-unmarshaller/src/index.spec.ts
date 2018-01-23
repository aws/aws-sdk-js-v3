import {OperationModel, ResolvedHttpResponse, Member, Structure} from '@aws/types';
import {ec2ErrorUnmarshaller} from './index';

describe('XML protocol Error Unmarshaller', () => {
    const minimalOperation: OperationModel = {
        http: {
            method: 'GET',
            requestUri: '/'
        },
        name: 'MockOperation',
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
                required: [],
                members: {
                    BoxUsage: {shape: {type: 'float'}},
                },
                exceptionType: 'NoSuchDomain'
            }
        },{
            shape: {
                type: 'structure',
                required: [],
                members: {
                    Type: {shape: {type: 'string'}}
                },
                exceptionCode: 'ValidationException'
            }
        }],
    };
    let errorResponse: ResolvedHttpResponse
    let operation: OperationModel;
    beforeEach(() => {
        operation = minimalOperation
        errorResponse = {
            statusCode: 400,
            headers: {},
            body: 
`<?xml version="1.0"?>
<Response>
    <Errors>
        <Error>
            <Code>NoSuchDomain</Code>
            <Message>The specified domain does not exist.</Message>
            <BoxUsage>0.0000219907</BoxUsage>
        </Error>
    </Errors>
    <RequestID>6ddf7eeb-fabe-acb2-e575-551cab04988f</RequestID>
</Response>`
        };
    })

    it('should correctly parse errors that modeled in API', async () => {
        const bodyParser = {
            parse: jest.fn(() => {}).mockImplementationOnce(() => {
                //output for parsing error code
                return {
                    Errors: {
                        Error: {
                            Code: 'NoSuchDomain',
                            Message: 'The specified domain does not exist.'
                        }
                    },
                    $metadata: {requestId: 'request-Id'}
                }
            }).mockImplementationOnce(() => {
                //output for parsing error owned properties
                return {
                    Errors: {
                        Error: {BoxUsage: 0.0000219907}
                    },
                    $metadata: {requestId: 'request-Id'}
                }
            })
        }
        const error = ec2ErrorUnmarshaller(operation, errorResponse, bodyParser);
        expect(bodyParser.parse.mock.calls.length).toBe(2);
        expect(error.name).toEqual('NoSuchDomain');
        expect(error.message).toEqual('The specified domain does not exist.');
        expect(error.$metadata.requestId).toEqual('request-Id');
        expect(error.details).toEqual({
            BoxUsage: 0.0000219907
        })
    })

    it('should correctly parse error name and message that are not modeled in API', async () => {
        const localErrorResponse: ResolvedHttpResponse = {...errorResponse, body:
`<?xml version="1.0"?>
    <Errors>
        <Error>
        <Code>AccessDenied</Code>
        <Message>Unable to determine service/operation name to be authorized</Message>
        <Error>
    </Errors>
    <RequestId>request-Id</RequestId>
</ErrorResponse>`
        };
        const bodyParser = {
            parse: jest.fn(() => {}).mockImplementationOnce(() => {
                //output for parsing error code
                return {
                    Errors: {
                        Error: {
                            Code: 'AccessDenied',
                            Message: 'Unable to determine service/operation name to be authorized'
                        }
                    },
                    $metadata: {requestId: 'request-Id'}
                }
            }).mockImplementation(() => {
                //output for parsing error owned properties
                return {
                    $metadata: {requestId: 'request-Id'}
                }
            })
        };
            const error = ec2ErrorUnmarshaller(operation, localErrorResponse, bodyParser);
            expect(bodyParser.parse.mock.calls.length).toBe(1);
            expect(error.name).toEqual('AccessDenied');
            expect(error.message).toEqual('Unable to determine service/operation name to be authorized');
            expect(error.$metadata.requestId).toEqual('request-Id');
            expect(error.details).toEqual({});
    });

    it('should parse unknown type of exception', async () => {
        const bodyParser = {parse: jest.fn(() => {
            return {$metadata: {requestId: 'request-Id'}}
        })};
        const unknownResponse: ResolvedHttpResponse = {...errorResponse, body: '<UnknownOperationException/>'}
        const error = ec2ErrorUnmarshaller(operation, unknownResponse, bodyParser);
        expect(error.name).toEqual('MockOperationError');
    });
})
