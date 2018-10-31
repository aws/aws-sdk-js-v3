import {OperationModel} from '@aws-sdk/types';

export const minimalOperation: OperationModel = {
    metadata: {
        apiVersion: '2017-09-21',
        endpointPrefix: 'foo',
        jsonVersion: '1.1',
        protocol: 'json',
        serviceFullName: 'AWS Foo Service',
        signatureVersion: 'v4',
        targetPrefix: 'targetPrefix',
        uid: 'foo-2017-09-21'
    },
    name: 'minimalOperation',
    http: {
        method: 'POST',
        requestUri: '/'
    },
    input: {
        shape: {
            type: 'structure',
            required: [],
            members: {}
        },
    },
    output: {
        shape: {
            type: 'structure',
            required: [],
            members: {}
        },
    },
    errors: []
};