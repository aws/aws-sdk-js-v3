import {UploadMultipartPartInput} from './UploadMultipartPartInput';
import {UploadMultipartPartOutput} from './UploadMultipartPartOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {RequestTimeoutException} from './RequestTimeoutException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UploadMultipartPart: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UploadMultipartPart',
    http: {
        method: 'PUT',
        requestUri: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}',
    },
    input: {
        shape: UploadMultipartPartInput,
    },
    output: {
        shape: UploadMultipartPartOutput,
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