import { BatchWriteItemInput } from "./BatchWriteItemInput";
import { BatchWriteItemOutput } from "./BatchWriteItemOutput";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ItemCollectionSizeLimitExceededException } from "./ItemCollectionSizeLimitExceededException";
import { RequestLimitExceeded } from "./RequestLimitExceeded";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchWriteItem: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchWriteItem",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchWriteItemInput
  },
  output: {
    shape: BatchWriteItemOutput
  },
  errors: [
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ItemCollectionSizeLimitExceededException
    },
    {
      shape: RequestLimitExceeded
    },
    {
      shape: InternalServerError
    }
  ]
};
