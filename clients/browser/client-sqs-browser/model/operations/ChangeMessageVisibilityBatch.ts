import { ChangeMessageVisibilityBatchInput } from "../shapes/ChangeMessageVisibilityBatchInput";
import { ChangeMessageVisibilityBatchOutput } from "../shapes/ChangeMessageVisibilityBatchOutput";
import { TooManyEntriesInBatchRequest } from "../shapes/TooManyEntriesInBatchRequest";
import { EmptyBatchRequest } from "../shapes/EmptyBatchRequest";
import { BatchEntryIdsNotDistinct } from "../shapes/BatchEntryIdsNotDistinct";
import { InvalidBatchEntryId } from "../shapes/InvalidBatchEntryId";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ChangeMessageVisibilityBatch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ChangeMessageVisibilityBatch",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ChangeMessageVisibilityBatchInput
  },
  output: {
    shape: ChangeMessageVisibilityBatchOutput,
    resultWrapper: "ChangeMessageVisibilityBatchResult"
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
