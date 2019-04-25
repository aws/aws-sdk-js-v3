import {Structure as _Structure_} from '@aws-sdk/types';

export const DeleteObjectInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'Key',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        Key: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'Key',
        },
        MFA: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-mfa',
        },
        VersionId: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'versionId',
        },
        RequestPayer: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-request-payer',
        },
    },
};