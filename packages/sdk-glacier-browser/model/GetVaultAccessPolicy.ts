import {GetVaultAccessPolicyInput} from './GetVaultAccessPolicyInput';
import {GetVaultAccessPolicyOutput} from './GetVaultAccessPolicyOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetVaultAccessPolicy: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetVaultAccessPolicy',
    http: {
        method: 'GET',
        requestUri: '/{accountId}/vaults/{vaultName}/access-policy',
    },
    input: {
        shape: GetVaultAccessPolicyInput,
    },
    output: {
        shape: GetVaultAccessPolicyOutput,
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