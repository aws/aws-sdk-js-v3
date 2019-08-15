import { GetItemInput } from "../shapes/GetItemInput";
import { GetItemOutput } from "../shapes/GetItemOutput";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { RequestLimitExceeded } from "../shapes/RequestLimitExceeded";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetItem: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetItem",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetItemInput
  },
  output: {
    shape: GetItemOutput
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
