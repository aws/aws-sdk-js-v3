import { TooManyEntriesInBatchRequest } from "./TooManyEntriesInBatchRequest";
import { EmptyBatchRequest } from "./EmptyBatchRequest";
import { BatchEntryIdsNotDistinct } from "./BatchEntryIdsNotDistinct";
import { InvalidBatchEntryId } from "./InvalidBatchEntryId";
export type DeleteMessageBatchExceptionsUnion =
  | TooManyEntriesInBatchRequest
  | EmptyBatchRequest
  | BatchEntryIdsNotDistinct
  | InvalidBatchEntryId;
