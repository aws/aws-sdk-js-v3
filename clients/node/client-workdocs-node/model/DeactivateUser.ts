import { DeactivateUserInput } from "./DeactivateUserInput";
import { DeactivateUserOutput } from "./DeactivateUserOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeactivateUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeactivateUser",
  http: {
    method: "DELETE",
    requestUri: "/api/v1/users/{UserId}/activation"
  },
  input: {
    shape: DeactivateUserInput
  },
  output: {
    shape: DeactivateUserOutput
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
