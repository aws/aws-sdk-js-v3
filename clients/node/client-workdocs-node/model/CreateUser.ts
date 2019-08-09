import { CreateUserInput } from "./CreateUserInput";
import { CreateUserOutput } from "./CreateUserOutput";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateUser",
  http: {
    method: "POST",
    requestUri: "/api/v1/users"
  },
  input: {
    shape: CreateUserInput
  },
  output: {
    shape: CreateUserOutput
  },
  errors: [
    {
      shape: EntityAlreadyExistsException
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
