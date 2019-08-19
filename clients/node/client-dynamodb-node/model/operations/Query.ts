import { QueryInput } from "../shapes/QueryInput";
import { QueryOutput } from "../shapes/QueryOutput";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { RequestLimitExceeded } from "../shapes/RequestLimitExceeded";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const Query: _Operation_ = {
  metadata: ServiceMetadata,
  name: "Query",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: QueryInput
  },
  output: {
    shape: QueryOutput
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
