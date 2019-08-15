import { CreateUserInput } from "../shapes/CreateUserInput";
import { CreateUserOutput } from "../shapes/CreateUserOutput";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
