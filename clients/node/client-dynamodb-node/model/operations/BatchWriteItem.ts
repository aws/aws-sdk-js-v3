import { BatchWriteItemInput } from "../shapes/BatchWriteItemInput";
import { BatchWriteItemOutput } from "../shapes/BatchWriteItemOutput";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ItemCollectionSizeLimitExceededException } from "../shapes/ItemCollectionSizeLimitExceededException";
import { RequestLimitExceeded } from "../shapes/RequestLimitExceeded";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
