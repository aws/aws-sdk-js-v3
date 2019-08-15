import { DeactivateUserInput } from "../shapes/DeactivateUserInput";
import { DeactivateUserOutput } from "../shapes/DeactivateUserOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
