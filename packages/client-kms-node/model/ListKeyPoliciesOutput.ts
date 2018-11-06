import {_PolicyNameList} from './_PolicyNameList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListKeyPoliciesOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        PolicyNames: {
            shape: _PolicyNameList,
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