import {DeleteStreamInput} from './DeleteStreamInput';
import {DeleteStreamOutput} from './DeleteStreamOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {LimitExceededException} from './LimitExceededException';
import {ResourceInUseException} from './ResourceInUseException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteStream: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteStream',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteStreamInput,
    },
    output: {
        shape: DeleteStreamOutput,
    },
    errors: [
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: ResourceInUseException,
        },
    ],
};