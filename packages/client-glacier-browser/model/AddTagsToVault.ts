import {AddTagsToVaultInput} from './AddTagsToVaultInput';
import {AddTagsToVaultOutput} from './AddTagsToVaultOutput';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {LimitExceededException} from './LimitExceededException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const AddTagsToVault: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'AddTagsToVault',
    http: {
        method: 'POST',
        requestUri: '/{accountId}/vaults/{vaultName}/tags?operation=add',
    },
    input: {
        shape: AddTagsToVaultInput,
    },
    output: {
        shape: AddTagsToVaultOutput,
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
            shape: LimitExceededException,
        },
        {
            shape: ServiceUnavailableException,
        },
    ],
};