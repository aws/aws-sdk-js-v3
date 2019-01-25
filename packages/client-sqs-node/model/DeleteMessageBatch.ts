import {DeleteMessageBatchInput} from './DeleteMessageBatchInput';
import {DeleteMessageBatchOutput} from './DeleteMessageBatchOutput';
import {TooManyEntriesInBatchRequest} from './TooManyEntriesInBatchRequest';
import {EmptyBatchRequest} from './EmptyBatchRequest';
import {BatchEntryIdsNotDistinct} from './BatchEntryIdsNotDistinct';
import {InvalidBatchEntryId} from './InvalidBatchEntryId';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteMessageBatch: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteMessageBatch',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteMessageBatchInput,
    },
    output: {
        shape: DeleteMessageBatchOutput,
        resultWrapper: 'DeleteMessageBatchResult',
    },
    errors: [
        {
            shape: TooManyEntriesInBatchRequest,
        },
        {
            shape: EmptyBatchRequest,
        },
        {
            shape: BatchEntryIdsNotDistinct,
        },
        {
            shape: InvalidBatchEntryId,
        },
    ],
};