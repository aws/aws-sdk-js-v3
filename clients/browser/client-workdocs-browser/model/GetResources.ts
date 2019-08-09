import { GetResourcesInput } from "./GetResourcesInput";
import { GetResourcesOutput } from "./GetResourcesOutput";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
