import {RemoveTagsFromVaultInput} from './RemoveTagsFromVaultInput';
import {RemoveTagsFromVaultOutput} from './RemoveTagsFromVaultOutput';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const RemoveTagsFromVault: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'RemoveTagsFromVault',
    http: {
        method: 'POST',
        requestUri: '/{accountId}/vaults/{vaultName}/tags?operation=remove',
    },
    input: {
        shape: RemoveTagsFromVaultInput,
    },
    output: {
        shape: RemoveTagsFromVaultOutput,
    },
    errors: [
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: MissingParameterValueException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: ServiceUnavailableException,
        },
    ],
};