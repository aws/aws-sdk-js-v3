import { DeleteMessageBatchInput } from "../shapes/DeleteMessageBatchInput";
import { DeleteMessageBatchOutput } from "../shapes/DeleteMessageBatchOutput";
import { TooManyEntriesInBatchRequest } from "../shapes/TooManyEntriesInBatchRequest";
import { EmptyBatchRequest } from "../shapes/EmptyBatchRequest";
import { BatchEntryIdsNotDistinct } from "../shapes/BatchEntryIdsNotDistinct";
import { InvalidBatchEntryId } from "../shapes/InvalidBatchEntryId";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteMessageBatch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMessageBatch",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteMessageBatchInput
  },
  output: {
    shape: DeleteMessageBatchOutput,
    resultWrapper: "DeleteMessageBatchResult"
  },
  errors: [
    {
      shape: TooManyEntriesInBatchRequest
    },
    {
      shape: EmptyBatchRequest
    },
    {
      shape: BatchEntryIdsNotDistinct
    },
    {
      shape: InvalidBatchEntryId
    }
  ]
};
