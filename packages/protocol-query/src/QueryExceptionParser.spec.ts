import {QueryParser} from './QueryParser';
import {OperationModel, HttpResponse, Member, Structure} from '@aws/types';
import {queryThrowException} from './QueryExceptionParser'

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
            queryThrowException,
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
            queryThrowException,
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
            queryThrowException,
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
