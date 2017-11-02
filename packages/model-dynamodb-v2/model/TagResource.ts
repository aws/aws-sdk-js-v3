import {TagResourceInput} from './TagResourceInput';
import {TagResourceOutput} from './TagResourceOutput';
import {LimitExceededException} from './LimitExceededException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerError} from './InternalServerError';
import {ResourceInUseException} from './ResourceInUseException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const TagResource: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'TagResource',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: TagResourceInput,
    },
    output: {
        shape: TagResourceOutput,
    },
    errors: [
        {
            shape: LimitExceededException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InternalServerError,
        },
        {
            shape: ResourceInUseException,
        },
    ],
};