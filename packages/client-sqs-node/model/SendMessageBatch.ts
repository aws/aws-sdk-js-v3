import {SendMessageBatchInput} from './SendMessageBatchInput';
import {SendMessageBatchOutput} from './SendMessageBatchOutput';
import {TooManyEntriesInBatchRequest} from './TooManyEntriesInBatchRequest';
import {EmptyBatchRequest} from './EmptyBatchRequest';
import {BatchEntryIdsNotDistinct} from './BatchEntryIdsNotDistinct';
import {BatchRequestTooLong} from './BatchRequestTooLong';
import {InvalidBatchEntryId} from './InvalidBatchEntryId';
import {UnsupportedOperation} from './UnsupportedOperation';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const SendMessageBatch: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'SendMessageBatch',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: SendMessageBatchInput,
    },
    output: {
        shape: SendMessageBatchOutput,
        resultWrapper: 'SendMessageBatchResult',
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
            shape: BatchRequestTooLong,
        },
        {
            shape: InvalidBatchEntryId,
        },
        {
            shape: UnsupportedOperation,
        },
    ],
};