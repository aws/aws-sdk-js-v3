import {_ObjectList} from './_ObjectList';
import {_CommonPrefixList} from './_CommonPrefixList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListObjectsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        IsTruncated: {
            shape: {
                type: 'boolean',
            },
        },
        Marker: {
            shape: {
                type: 'string',
            },
        },
        NextMarker: {
            shape: {
                type: 'string',
            },
        },
        Contents: {
            shape: _ObjectList,
        },
        Name: {
            shape: {
                type: 'string',
            },
        },
        Prefix: {
            shape: {
                type: 'string',
            },
        },
        Delimiter: {
            shape: {
                type: 'string',
            },
        },
        MaxKeys: {
            shape: {
                type: 'integer',
            },
        },
        CommonPrefixes: {
            shape: _CommonPrefixList,
        },
        EncodingType: {
            shape: {
                type: 'string',
            },
        },
    },
};