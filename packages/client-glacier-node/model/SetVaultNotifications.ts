import {SetVaultNotificationsInput} from './SetVaultNotificationsInput';
import {SetVaultNotificationsOutput} from './SetVaultNotificationsOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const SetVaultNotifications: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'SetVaultNotifications',
    http: {
        method: 'PUT',
        requestUri: '/{accountId}/vaults/{vaultName}/notification-configuration',
    },
    input: {
        shape: SetVaultNotificationsInput,
    },
    output: {
        shape: SetVaultNotificationsOutput,
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