import {Map as _Map_} from '@aws-sdk/types';
import {_RoleMapping} from './_RoleMapping';

export const _RoleMappingMap: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
            min: 1,
        },
    },
    value: {
        shape: _RoleMapping,
    },
};