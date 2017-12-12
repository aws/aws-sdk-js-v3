import {JsonRpcParser} from './JsonRpcParser';
import {throwException} from './JsonExceptionParser';
import {HttpResponse, ServiceException, OperationModel} from '@aws/types';

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

describe('Service Exception Parser', () => {
    const bodyParser = {
        parse: jest.fn(() => { return 'ThisIsBody'; })
    };
    const parser = new JsonRpcParser<any>(
        bodyParser,
        jest.fn(() => {}),
        jest.fn(() => {}),
        throwException
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
