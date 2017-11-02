import {_KeySchema} from './_KeySchema';
import {_Projection} from './_Projection';
import {Structure as _Structure_} from '@aws/types';

export const _LocalSecondaryIndex: _Structure_ = {
    type: 'structure',
    required: [
        'IndexName',
        'KeySchema',
        'Projection',
    ],
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
    },
};