import {DeleteTableInput} from './DeleteTableInput';
import {DeleteTableOutput} from './DeleteTableOutput';
import {ResourceInUseException} from './ResourceInUseException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {LimitExceededException} from './LimitExceededException';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteTable: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteTable',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteTableInput,
    },
    output: {
        shape: DeleteTableOutput,
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