import {AbortMultipartUploadInput} from './AbortMultipartUploadInput';
import {AbortMultipartUploadOutput} from './AbortMultipartUploadOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const AbortMultipartUpload: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'AbortMultipartUpload',
    http: {
        method: 'DELETE',
        requestUri: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}',
    },
    input: {
        shape: AbortMultipartUploadInput,
    },
    output: {
        shape: AbortMultipartUploadOutput,
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