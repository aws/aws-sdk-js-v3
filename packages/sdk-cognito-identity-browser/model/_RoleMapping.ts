import {_RulesConfigurationType} from './_RulesConfigurationType';
import {Structure as _Structure_} from '@aws/types';

export const _RoleMapping: _Structure_ = {
    type: 'structure',
    required: [
        'Type',
    ],
    members: {
        Type: {
            shape: {
                type: 'string',
            },
        },
        AmbiguousRoleResolution: {
            shape: {
                type: 'string',
            },
        },
        RulesConfiguration: {
            shape: _RulesConfigurationType,
        },
    },
};