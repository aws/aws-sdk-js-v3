import {ChangeMessageVisibilityBatchInput} from './ChangeMessageVisibilityBatchInput';
import {ChangeMessageVisibilityBatchOutput} from './ChangeMessageVisibilityBatchOutput';
import {TooManyEntriesInBatchRequest} from './TooManyEntriesInBatchRequest';
import {EmptyBatchRequest} from './EmptyBatchRequest';
import {BatchEntryIdsNotDistinct} from './BatchEntryIdsNotDistinct';
import {InvalidBatchEntryId} from './InvalidBatchEntryId';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ChangeMessageVisibilityBatch: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ChangeMessageVisibilityBatch',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ChangeMessageVisibilityBatchInput,
    },
    output: {
        shape: ChangeMessageVisibilityBatchOutput,
        resultWrapper: 'ChangeMessageVisibilityBatchResult',
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