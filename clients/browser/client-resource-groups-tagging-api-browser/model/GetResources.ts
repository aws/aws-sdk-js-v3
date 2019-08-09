import { GetResourcesInput } from "./GetResourcesInput";
import { GetResourcesOutput } from "./GetResourcesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottledException } from "./ThrottledException";
import { InternalServiceException } from "./InternalServiceException";
import { PaginationTokenExpiredException } from "./PaginationTokenExpiredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetResourcesInput
  },
  output: {
    shape: GetResourcesOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ThrottledException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: PaginationTokenExpiredException
    }
  ]
};
