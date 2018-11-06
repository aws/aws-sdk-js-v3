import {Structure as _Structure_} from '@aws-sdk/types';

export const PutBucketPolicyInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'Policy',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        ContentMD5: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Content-MD5',
        },
        ConfirmRemoveSelfBucketAccess: {
            shape: {
                type: 'boolean',
            },
            location: 'header',
            locationName: 'x-amz-confirm-remove-self-bucket-access',
        },
        Policy: {
            shape: {
                type: 'string',
            },
        },
    },
    payload: 'Policy',
};