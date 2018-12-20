import {DeleteArchiveInput} from './DeleteArchiveInput';
import {DeleteArchiveOutput} from './DeleteArchiveOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteArchive: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteArchive',
    http: {
        method: 'DELETE',
        requestUri: '/{accountId}/vaults/{vaultName}/archives/{archiveId}',
    },
    input: {
        shape: DeleteArchiveInput,
    },
    output: {
        shape: DeleteArchiveOutput,
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