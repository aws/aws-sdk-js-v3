import {TooManyEntriesInBatchRequest} from './TooManyEntriesInBatchRequest';
import {EmptyBatchRequest} from './EmptyBatchRequest';
import {BatchEntryIdsNotDistinct} from './BatchEntryIdsNotDistinct';
import {BatchRequestTooLong} from './BatchRequestTooLong';
import {InvalidBatchEntryId} from './InvalidBatchEntryId';
import {UnsupportedOperation} from './UnsupportedOperation';
export type SendMessageBatchExceptionsUnion = TooManyEntriesInBatchRequest |
    EmptyBatchRequest |
    BatchEntryIdsNotDistinct |
    BatchRequestTooLong |
    InvalidBatchEntryId |
    UnsupportedOperation;
