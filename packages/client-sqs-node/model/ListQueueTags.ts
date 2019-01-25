import {ListQueueTagsInput} from './ListQueueTagsInput';
import {ListQueueTagsOutput} from './ListQueueTagsOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListQueueTags: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListQueueTags',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListQueueTagsInput,
    },
    output: {
        shape: ListQueueTagsOutput,
        resultWrapper: 'ListQueueTagsResult',
    },
    errors: [],
};