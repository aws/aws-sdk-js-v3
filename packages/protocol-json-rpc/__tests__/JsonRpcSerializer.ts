import {JsonRpcSerializer} from "../lib/JsonRpcSerializer";
import {HttpEndpoint, OperationModel} from "@aws/types";

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
        targetPrefix: 'FooTarget',
        jsonVersion: '1.1',
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
    errors: [],
};

const endpoint: HttpEndpoint = {
    protocol: 'https:',
    hostname: 'foo.region.amazonaws.com',
    path: '/path',
};

describe('JsonRpcSerializer', () => {
    it(
        'should use the injected body serializer to build the HTTP request body',
        () => {
            const bodySerializer = {
                build: jest.fn(() => 'serialized'),
            };
            const input = {foo: 'bar'};
            const serializer = new JsonRpcSerializer(endpoint, bodySerializer);
            expect(serializer.serialize(operation, input).body)
                .toBe('serialized');

            expect(bodySerializer.build.mock.calls.length).toBe(1);
            expect(bodySerializer.build.mock.calls[0]).toEqual([
                operation.input,
                input,
            ]);
        }
    );

    it('should use the operation HTTP trait to build the request', () => {
        const bodySerializer = {
            build: jest.fn(() => 'serialized'),
        };
        const serializer = new JsonRpcSerializer(endpoint, bodySerializer);
        const serialized = serializer.serialize(operation, {foo: 'bar'});

        expect(serialized.method).toBe(operation.http.method);
        expect(serialized.path).toBe(operation.http.requestUri);
    });

    it(
        'should construct a Content-Type header using the service JSON version',
        () => {
            const bodySerializer = {
                build: jest.fn(() => 'serialized'),
            };
            const serializer = new JsonRpcSerializer(endpoint, bodySerializer);
            const serialized = serializer.serialize(operation, {foo: 'bar'});

            expect(serialized.headers['Content-Type']).toBe(
                `application/x-amz-json-${operation.metadata.jsonVersion}`
            );
        }
    );

    it(
        'should construct an X-Amz-Target header using the service target prefix and the operation name',
        () => {
            const bodySerializer = {
                build: jest.fn(() => 'serialized'),
            };
            const serializer = new JsonRpcSerializer(endpoint, bodySerializer);
            const serialized = serializer.serialize(operation, {foo: 'bar'});

            expect(serialized.headers['X-Amz-Target'])
                .toBe(`${operation.metadata.targetPrefix}.${operation.name}`);
        }
    );
});
