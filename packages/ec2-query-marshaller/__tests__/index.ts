import {EC2Marshaller} from '../index';
import {
    OperationModel,
    HttpEndpoint
} from '@aws/types'

const operation: OperationModel = {
    http: {
        method: 'GET',
        requestUri: '/'
    },
    name: 'test',
    metadata: {
        apiVersion: '2017-08-23',
        endpointPrefix: 'A-Prefix',
        protocol: 'ec2',
        serviceFullName: 'AWS Fake Service',
        signatureVersion: 'v4',
        uid: 'uid-2017-08-23'
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
    path: '/',
};

describe('EC2Marshaller', () => {
    it(
        'should use the injected body serializer and metadata to build the HTTP request body',
        () => {
            const bodySerializer = {
                build: jest.fn(() => 'serialized'),
            };
            const serializer = new EC2Marshaller(endpoint, bodySerializer);
            expect(serializer.serialize(operation, {foo: 'bar'}).body)
                .toBe('Action=test&Version=2017-08-23&serialized');

            expect(bodySerializer.build.mock.calls.length).toBe(1);
            expect(bodySerializer.build.mock.calls[0]).toEqual([
                operation.input,
                {foo: 'bar'},
            ]);
        }
    );

    it(
        'should construct a Content-Type header',
        () => {
            const bodySerializer = {
                build: jest.fn(() => 'serialized'),
            };
            const serializer = new EC2Marshaller(endpoint, bodySerializer);
            const serialized = serializer.serialize(operation, {foo: 'bar'});

            expect(serialized.headers['Content-Type']).toBe(
                'application/x-www-form-urlencoded; charset=utf-8'
            );
        }
    );

    it('should use the operation HTTP trait to build the request', () => {
        const bodySerializer = {
            build: jest.fn(() => 'serialized'),
        };
        const serializer = new EC2Marshaller(endpoint, bodySerializer);
        const serialized = serializer.serialize(operation, {foo: 'bar'});

        expect(serialized.method).toBe(operation.http.method);
        expect(serialized.path).toBe(operation.http.requestUri);
    });

    it('should have correct HTTP endpoint', () => {
        const bodySerializer = {
            build: jest.fn(() => 'serialized'),
        };
        const serializer = new EC2Marshaller(endpoint, bodySerializer);
        const serialized = serializer.serialize(operation, {foo: 'bar'});

        expect(serialized.protocol).toBe(endpoint.protocol);
        expect(serialized.hostname).toBe(endpoint.hostname);
        expect(serialized.port).toBe(endpoint.port);
        expect(serialized.query).toBe(endpoint.query);
    });
});
