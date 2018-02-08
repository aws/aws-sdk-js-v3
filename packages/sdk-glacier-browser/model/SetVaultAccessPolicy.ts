import {SetVaultAccessPolicyInput} from './SetVaultAccessPolicyInput';
import {SetVaultAccessPolicyOutput} from './SetVaultAccessPolicyOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const SetVaultAccessPolicy: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'SetVaultAccessPolicy',
    http: {
        method: 'PUT',
        requestUri: '/{accountId}/vaults/{vaultName}/access-policy',
    },
    input: {
        shape: SetVaultAccessPolicyInput,
    },
    output: {
        shape: SetVaultAccessPolicyOutput,
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