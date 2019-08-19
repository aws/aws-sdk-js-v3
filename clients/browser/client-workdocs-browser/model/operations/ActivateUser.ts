import { ActivateUserInput } from "../shapes/ActivateUserInput";
import { ActivateUserOutput } from "../shapes/ActivateUserOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
