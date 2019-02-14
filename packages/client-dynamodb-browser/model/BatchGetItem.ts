import {BatchGetItemInput} from './BatchGetItemInput';
import {BatchGetItemOutput} from './BatchGetItemOutput';
import {ProvisionedThroughputExceededException} from './ProvisionedThroughputExceededException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const BatchGetItem: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'BatchGetItem',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: BatchGetItemInput,
    },
    output: {
        shape: BatchGetItemOutput,
    },
    errors: [
        {
            shape: ProvisionedThroughputExceededException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InternalServerError,
        },
    ],
};