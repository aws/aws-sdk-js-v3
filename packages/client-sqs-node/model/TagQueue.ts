import {TagQueueInput} from './TagQueueInput';
import {TagQueueOutput} from './TagQueueOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const TagQueue: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'TagQueue',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: TagQueueInput,
    },
    output: {
        shape: TagQueueOutput,
    },
    errors: [],
};