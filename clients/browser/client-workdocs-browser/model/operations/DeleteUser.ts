import { DeleteUserInput } from "../shapes/DeleteUserInput";
import { DeleteUserOutput } from "../shapes/DeleteUserOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUser",
  http: {
    method: "DELETE",
    requestUri: "/api/v1/users/{UserId}"
  },
  input: {
    shape: DeleteUserInput
  },
  output: {
    shape: DeleteUserOutput
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
