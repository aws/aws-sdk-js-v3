import {_VaultNotificationConfig} from './_VaultNotificationConfig';
import {Structure as _Structure_} from '@aws/types';

export const SetVaultNotificationsInput: _Structure_ = {
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
        vaultNotificationConfig: {
            shape: _VaultNotificationConfig,
        },
    },
    payload: 'vaultNotificationConfig',
};