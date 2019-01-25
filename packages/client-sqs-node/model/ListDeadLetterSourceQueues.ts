import {ListDeadLetterSourceQueuesInput} from './ListDeadLetterSourceQueuesInput';
import {ListDeadLetterSourceQueuesOutput} from './ListDeadLetterSourceQueuesOutput';
import {QueueDoesNotExist} from './QueueDoesNotExist';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListDeadLetterSourceQueues: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListDeadLetterSourceQueues',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListDeadLetterSourceQueuesInput,
    },
    output: {
        shape: ListDeadLetterSourceQueuesOutput,
        resultWrapper: 'ListDeadLetterSourceQueuesResult',
    },
    errors: [
        {
            shape: QueueDoesNotExist,
        },
    ],
};