import {GetVaultNotificationsInput} from './GetVaultNotificationsInput';
import {GetVaultNotificationsOutput} from './GetVaultNotificationsOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetVaultNotifications: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetVaultNotifications',
    http: {
        method: 'GET',
        requestUri: '/{accountId}/vaults/{vaultName}/notification-configuration',
    },
    input: {
        shape: GetVaultNotificationsInput,
    },
    output: {
        shape: GetVaultNotificationsOutput,
    },
    errors: [
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: MissingParameterValueException,
        },
        {
            shape: ServiceUnavailableException,
        },
    ],
};