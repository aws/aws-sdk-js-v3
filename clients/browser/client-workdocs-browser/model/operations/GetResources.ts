import { GetResourcesInput } from "../shapes/GetResourcesInput";
import { GetResourcesOutput } from "../shapes/GetResourcesOutput";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResources",
  http: {
    method: "GET",
    requestUri: "/api/v1/resources"
  },
  input: {
    shape: GetResourcesInput
  },
  output: {
    shape: GetResourcesOutput
  },
  errors: [
    {
      shape: UnauthorizedResourceAccessException
    },
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: FailedDependencyException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
