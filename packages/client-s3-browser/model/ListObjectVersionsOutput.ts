import {_ObjectVersionList} from './_ObjectVersionList';
import {_DeleteMarkers} from './_DeleteMarkers';
import {_CommonPrefixList} from './_CommonPrefixList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListObjectVersionsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        IsTruncated: {
            shape: {
                type: 'boolean',
            },
        },
        KeyMarker: {
            shape: {
                type: 'string',
            },
        },
        VersionIdMarker: {
            shape: {
                type: 'string',
            },
        },
        NextKeyMarker: {
            shape: {
                type: 'string',
            },
        },
        NextVersionIdMarker: {
            shape: {
                type: 'string',
            },
        },
        Versions: {
            shape: _ObjectVersionList,
            locationName: 'Version',
        },
        DeleteMarkers: {
            shape: _DeleteMarkers,
            locationName: 'DeleteMarker',
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