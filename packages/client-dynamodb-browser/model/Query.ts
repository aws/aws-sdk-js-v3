import { QueryInput } from "./QueryInput";
import { QueryOutput } from "./QueryOutput";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
      shape: InternalServerError
    }
  ]
};
