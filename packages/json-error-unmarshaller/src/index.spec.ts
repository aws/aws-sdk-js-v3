import {jsonThrowException} from './';
import {
    OperationModel,
    ResolvedHttpResponse,
    ServiceException
} from '@aws/types';

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

describe('Json Service Exception Parser', () => {
    const bodyParser = {
        parse: jest.fn(() => { return 'ThisIsBody'; })
    };
    const response: ResolvedHttpResponse = {
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
        let badResponse: ResolvedHttpResponse = {
            statusCode: 400,
            headers: {},
            body: ''
        }
        try {
            await jsonThrowException(operation, badResponse, bodyParser);
        } catch(e) {
            expect(e.name).toEqual('_UnknownServiceException');
            expect(e.message).toBe('');
            expect(e.details).toBe(undefined);
            expect(e.$metadata.httpResponse).toEqual({
                ...badResponse,
                body: ''
            });
        }
    })

    it('should parse exception from header', async function() {
        let badResponse: ResolvedHttpResponse = {
            ...response,
            body: ''
        };
        try {
            await jsonThrowException(operation, badResponse, bodyParser);
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
        let badResponse: ResolvedHttpResponse = {
            ...response,
            headers: {},
            body: '{\"code\": \"StructureException\"}'
        };
        try {
            await jsonThrowException(operation, badResponse, bodyParser);
        } catch(e) {
            expect(e.name).toEqual('StructureException');
            expect(bodyParser.parse).toBeCalled();
            expect(e.$metadata).toEqual({...exceptionFixture.$metadata, httpResponse: badResponse})
        }
    });

    it('should choose right service exception to parse', async function() {
        let badResponse: ResolvedHttpResponse = {
            ...response,
            headers: {},
            body: '{\"code\": \"MapException\"}'
        };
        try {
            await jsonThrowException(operation, badResponse, bodyParser);
        } catch(e) {
            expect(e.name).toEqual('MapException');
            expect(bodyParser.parse).toBeCalled();
            expect(e.$metadata).toEqual({...exceptionFixture.$metadata, httpResponse: badResponse})
        }
    });

    it('should infer exception name and message for exceptions not from API', async function() {
        let badResponse: ResolvedHttpResponse = {
            ...response,
            headers: {'x-amzn-errortype': 'MockException'},
            body: '{\"message\": \"This Is A MockException\"}'
        };
        try {
            await jsonThrowException(operation, badResponse, bodyParser);
        } catch(e) {
            expect(e.name).toEqual('MockException');
            expect(e.message).toEqual('This Is A MockException')
        }
    })

    it('should throw unparsable exception when cannot extract exception', async function() {
        let badResponse: ResolvedHttpResponse = {
            ...response,
            headers: {},
            body: '{\"name\": \"MockException\"}'
        };
        try {
            await jsonThrowException(operation, badResponse, bodyParser);
        } catch(e) {
            expect(e.name).toEqual('_UnknownServiceException');
            expect(bodyParser.parse).toBeCalled();
            expect(e.$metadata).toEqual({...exceptionFixture.$metadata, httpResponse: badResponse})
        }
    })
})
