import {_KeySchema} from './_KeySchema';
import {_Projection} from './_Projection';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _LocalSecondaryIndexDescription: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        IndexName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        KeySchema: {
            shape: _KeySchema,
        },
        Projection: {
            shape: _Projection,
        },
        IndexSizeBytes: {
            shape: {
                type: 'integer',
            },
        },
        ItemCount: {
            shape: {
                type: 'integer',
            },
        },
        IndexArn: {
            shape: {
                type: 'string',
            },
        },
    },
};