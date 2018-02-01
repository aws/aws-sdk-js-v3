import {Structure as _Structure_} from '@aws/types';

export const _MappingRule: _Structure_ = {
    type: 'structure',
    required: [
        'Claim',
        'MatchType',
        'Value',
        'RoleARN',
    ],
    members: {
        Claim: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        MatchType: {
            shape: {
                type: 'string',
            },
        },
        Value: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        RoleARN: {
            shape: {
                type: 'string',
                min: 20,
            },
        },
    },
};