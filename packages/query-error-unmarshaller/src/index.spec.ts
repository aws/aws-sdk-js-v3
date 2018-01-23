import {OperationModel, ResolvedHttpResponse, Member, Structure} from '@aws/types';
import {queryErrorUnmarshaller} from './index';

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
            protocol: 'rest-xml',
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
    let errorResponse: ResolvedHttpResponse
    let operation: OperationModel;
    beforeEach(() => {
        operation = minimalOperation
        errorResponse = {
            statusCode: 400,
            headers: {},
            body: 
`<ErrorResponse xmlns="http://ses.amazonaws.com/doc/2010-12-01/">
    <Error>
        <Code>ConfigurationSetDoesNotExist</Code>
        <Message>Configuration set does not exist.</Message>
        <Type>Sender</Type>
    </Error>
    <RequestId>request-Id</RequestId>
</ErrorResponse>`
        };
    })

    it('should correctly parse error name and message that are not modeled in API', async () => {
        const bodyParser = {
            parse: jest.fn(() => {}).mockImplementationOnce(() => {
                //output for parsing error code
                return {
                    Error: {
                        Code: 'ConfigurationSetDoesNotExist',
                        Message: 'Configuration set does not exist.'
                    },
                    $metadata: {requestId: 'request-Id'}
                }
            }).mockImplementationOnce(() => {
                //output for parsing error owned properties
                return {
                    Error: {Type: 'Sender'},
                    $metadata: {requestId: 'request-Id'}
                }
            })
        }
            const error = queryErrorUnmarshaller(operation, errorResponse, bodyParser);
            expect(bodyParser.parse.mock.calls.length).toBe(operation.errors.length + 1);
            expect(error.name).toEqual('ConfigurationSetDoesNotExist');
            expect(error.message).toEqual('Configuration set does not exist.');
            expect(error.$metadata.requestId).toEqual('request-Id');
            expect(error.details).toEqual({Type: 'Sender'});
    })

    it('should parse unknown type of exception', async () => {
        const bodyParser = {parse: jest.fn(() => {
            return {$metadata: {requestId: 'request-Id'}}
        })};
        const unknownResponse: ResolvedHttpResponse = {...errorResponse, body: '<UnknownOperationException/>'}
            const error = queryErrorUnmarshaller(operation, unknownResponse, bodyParser);
            expect(error.name).toEqual(`${operation.name}Error`);
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
                        $metadata: {requestId: 'request-Id'}
                    }
                } else {
                    //output for parsing error owned properties
                    errorsOwnPropertiesOutput();
                }
            }
        )};
            const error = queryErrorUnmarshaller(operation, errorResponse, bodyParser);
            expect(bodyParser.parse.mock.calls.length).toBe(1);
            expect(errorsOwnPropertiesOutput.mock.calls.length).toBe(0);
            expect(error.name).toEqual('ValidationException');
            expect(error.message).toEqual('parameter ID is not correct.');
            expect(error.$metadata.requestId).toEqual('request-Id'); 
    })
})
