import { BatchGetItemInput } from "../shapes/BatchGetItemInput";
import { BatchGetItemOutput } from "../shapes/BatchGetItemOutput";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { RequestLimitExceeded } from "../shapes/RequestLimitExceeded";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchGetItem: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetItem",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetItemInput
  },
  output: {
    shape: BatchGetItemOutput
  },
  errors: [
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: RequestLimitExceeded
    },
    {
      shape: InternalServerError
    }
  ]
};
