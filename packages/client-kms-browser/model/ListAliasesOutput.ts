import {_AliasList} from './_AliasList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListAliasesOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Aliases: {
            shape: _AliasList,
        },
        NextMarker: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Truncated: {
            shape: {
                type: 'boolean',
            },
        },
    },
};