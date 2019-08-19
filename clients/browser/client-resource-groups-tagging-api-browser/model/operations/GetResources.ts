import { GetResourcesInput } from "../shapes/GetResourcesInput";
import { GetResourcesOutput } from "../shapes/GetResourcesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ThrottledException } from "../shapes/ThrottledException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { PaginationTokenExpiredException } from "../shapes/PaginationTokenExpiredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
