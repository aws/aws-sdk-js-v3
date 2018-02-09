import {_VaultLockPolicy} from './_VaultLockPolicy';
import {Structure as _Structure_} from '@aws/types';

export const InitiateVaultLockInput: _Structure_ = {
    type: 'structure',
    required: [
        'accountId',
        'vaultName',
    ],
    members: {
        accountId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'accountId',
        },
        vaultName: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'vaultName',
        },
        policy: {
            shape: _VaultLockPolicy,
        },
    },
    payload: 'policy',
};