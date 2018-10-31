import {_VaultAccessPolicy} from './_VaultAccessPolicy';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetVaultAccessPolicyOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        policy: {
            shape: _VaultAccessPolicy,
        },
    },
    payload: 'policy',
};