import {_KeySchema} from './_KeySchema';
import {_Projection} from './_Projection';
import {_ProvisionedThroughputDescription} from './_ProvisionedThroughputDescription';
import {Structure as _Structure_} from '@aws/types';

export const _GlobalSecondaryIndexDescription: _Structure_ = {
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
        IndexStatus: {
            shape: {
                type: 'string',
            },
        },
        Backfilling: {
            shape: {
                type: 'boolean',
            },
        },
        ProvisionedThroughput: {
            shape: _ProvisionedThroughputDescription,
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