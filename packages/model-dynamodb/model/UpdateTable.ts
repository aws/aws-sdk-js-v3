import {UpdateTableInput} from './UpdateTableInput';
import {UpdateTableOutput} from './UpdateTableOutput';
import {ResourceInUseException} from './ResourceInUseException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {LimitExceededException} from './LimitExceededException';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateTable: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateTable',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateTableInput,
    },
    output: {
        shape: UpdateTableOutput,
    },
    errors: [
        {
            shape: ResourceInUseException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: InternalServerError,
        },
    ],
};