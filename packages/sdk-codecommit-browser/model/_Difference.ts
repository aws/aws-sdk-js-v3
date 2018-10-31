import {_BlobMetadata} from './_BlobMetadata';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _Difference: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        beforeBlob: {
            shape: _BlobMetadata,
        },
        afterBlob: {
            shape: _BlobMetadata,
        },
        changeType: {
            shape: {
                type: 'string',
            },
        },
    },
};