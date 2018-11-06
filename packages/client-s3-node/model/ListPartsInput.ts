import {Structure as _Structure_} from '@aws-sdk/types';

export const ListPartsInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'Key',
        'UploadId',
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
        MaxParts: {
            shape: {
                type: 'integer',
            },
            location: 'querystring',
            locationName: 'max-parts',
        },
        PartNumberMarker: {
            shape: {
                type: 'integer',
            },
            location: 'querystring',
            locationName: 'part-number-marker',
        },
        UploadId: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'uploadId',
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