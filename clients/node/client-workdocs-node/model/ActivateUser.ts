import { ActivateUserInput } from "./ActivateUserInput";
import { ActivateUserOutput } from "./ActivateUserOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ActivateUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ActivateUser",
  http: {
    method: "POST",
    requestUri: "/api/v1/users/{UserId}/activation"
  },
  input: {
    shape: ActivateUserInput
  },
  output: {
    shape: ActivateUserOutput
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
