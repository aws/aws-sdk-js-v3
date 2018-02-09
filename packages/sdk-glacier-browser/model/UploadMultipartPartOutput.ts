import {Structure as _Structure_} from '@aws/types';

export const UploadMultipartPartOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        checksum: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-sha256-tree-hash',
        },
    },
};