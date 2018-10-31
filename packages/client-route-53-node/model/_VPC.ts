import {Structure as _Structure_} from '@aws-sdk/types';

export const _VPC: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        VPCRegion: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        VPCId: {
            shape: {
                type: 'string',
            },
        },
    },
};