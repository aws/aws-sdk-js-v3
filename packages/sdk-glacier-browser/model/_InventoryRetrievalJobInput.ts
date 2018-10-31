import {Structure as _Structure_} from '@aws-sdk/types';

export const _InventoryRetrievalJobInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        StartDate: {
            shape: {
                type: 'string',
            },
        },
        EndDate: {
            shape: {
                type: 'string',
            },
        },
        Limit: {
            shape: {
                type: 'string',
            },
        },
        Marker: {
            shape: {
                type: 'string',
            },
        },
    },
};