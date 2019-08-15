import { SendMessageBatchInput } from "../shapes/SendMessageBatchInput";
import { SendMessageBatchOutput } from "../shapes/SendMessageBatchOutput";
import { TooManyEntriesInBatchRequest } from "../shapes/TooManyEntriesInBatchRequest";
import { EmptyBatchRequest } from "../shapes/EmptyBatchRequest";
import { BatchEntryIdsNotDistinct } from "../shapes/BatchEntryIdsNotDistinct";
import { BatchRequestTooLong } from "../shapes/BatchRequestTooLong";
import { InvalidBatchEntryId } from "../shapes/InvalidBatchEntryId";
import { UnsupportedOperation } from "../shapes/UnsupportedOperation";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SendMessageBatch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendMessageBatch",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendMessageBatchInput
  },
  output: {
    shape: SendMessageBatchOutput,
    resultWrapper: "SendMessageBatchResult"
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
      shape: BatchRequestTooLong
    },
    {
      shape: InvalidBatchEntryId
    },
    {
      shape: UnsupportedOperation
    }
  ]
};
