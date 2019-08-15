import { GetCurrentUserInput } from "../shapes/GetCurrentUserInput";
import { GetCurrentUserOutput } from "../shapes/GetCurrentUserOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCurrentUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCurrentUser",
  http: {
    method: "GET",
    requestUri: "/api/v1/me"
  },
  input: {
    shape: GetCurrentUserInput
  },
  output: {
    shape: GetCurrentUserOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
    },
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: UnauthorizedResourceAccessException
    },
    {
      shape: FailedDependencyException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
