import { GetCurrentUserInput } from "./GetCurrentUserInput";
import { GetCurrentUserOutput } from "./GetCurrentUserOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
