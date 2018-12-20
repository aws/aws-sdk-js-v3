import {UploadArchiveInput} from './UploadArchiveInput';
import {UploadArchiveOutput} from './UploadArchiveOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {RequestTimeoutException} from './RequestTimeoutException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UploadArchive: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UploadArchive',
    http: {
        method: 'POST',
        requestUri: '/{accountId}/vaults/{vaultName}/archives',
    },
    input: {
        shape: UploadArchiveInput,
    },
    output: {
        shape: UploadArchiveOutput,
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
            shape: RequestTimeoutException,
        },
        {
            shape: ServiceUnavailableException,
        },
    ],
};