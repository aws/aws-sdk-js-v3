import {Structure as _Structure_} from '@aws-sdk/types';

export const ListMultipartUploadsInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        Delimiter: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'delimiter',
        },
        EncodingType: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'encoding-type',
        },
        KeyMarker: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'key-marker',
        },
        MaxUploads: {
            shape: {
                type: 'integer',
            },
            location: 'querystring',
            locationName: 'max-uploads',
        },
        Prefix: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'prefix',
        },
        UploadIdMarker: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'upload-id-marker',
        },
    },
};