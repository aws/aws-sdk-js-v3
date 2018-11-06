import {
    OperationModel,
    ServiceMetadata
} from '@aws-sdk/types';

const s3Metadata: ServiceMetadata = {
    apiVersion: '2006-03-01',
    endpointPrefix: 's3',
    protocol: 'rest-xml',
    serviceAbbreviation: 'Amazon S3',
    serviceFullName: 'Amazon Simple Storage Service',
    serviceId: 'S3',
    signatureVersion: 's3',
    uid: 's3-2006-03-01'
};

export const PutObject: OperationModel = {
    metadata: s3Metadata,
    name: 'PutObjectOperation',
    http: {
        method: 'PUT',
        requestUri: '/',
    },
    input: {
        shape: {
            type: 'structure',
            required: [
                'Bucket',
                'Key',
            ],
            members: {
                Body: {
                    shape: {
                        type: 'blob',
                    },
                    streaming: true,
                }
            },
            payload: 'Body',
        }
    },
    output: {
        shape: {
            type: 'structure',
            required: [],
            members: {}
        }
    },
    errors: [],
}