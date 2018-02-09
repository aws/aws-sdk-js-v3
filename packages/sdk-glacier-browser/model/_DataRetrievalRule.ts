import {Structure as _Structure_} from '@aws/types';

export const _DataRetrievalRule: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Strategy: {
            shape: {
                type: 'string',
            },
        },
        BytesPerHour: {
            shape: {
                type: 'integer',
            },
        },
    },
};