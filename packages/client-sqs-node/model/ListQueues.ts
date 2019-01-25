import {ListQueuesInput} from './ListQueuesInput';
import {ListQueuesOutput} from './ListQueuesOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListQueues: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListQueues',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListQueuesInput,
    },
    output: {
        shape: ListQueuesOutput,
        resultWrapper: 'ListQueuesResult',
    },
    errors: [],
};