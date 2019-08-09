import { CreateUserInput } from "./CreateUserInput";
import { CreateUserOutput } from "./CreateUserOutput";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateUserInput
  },
  output: {
    shape: CreateUserOutput
  },
  errors: [
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: InvalidAccountStatusException
    },
    {
      shape: InvalidParameterCombinationException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: OperationNotPermittedException
    }
  ]
};
