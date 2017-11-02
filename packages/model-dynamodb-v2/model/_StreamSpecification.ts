import {Structure as _Structure_} from '@aws/types';

export const _StreamSpecification: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        StreamEnabled: {
            shape: {
                type: 'boolean',
            },
        },
        StreamViewType: {
            shape: {
                type: 'string',
            },
        },
    },
};