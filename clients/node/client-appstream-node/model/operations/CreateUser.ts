import { CreateUserInput } from "../shapes/CreateUserInput";
import { CreateUserOutput } from "../shapes/CreateUserOutput";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { InvalidAccountStatusException } from "../shapes/InvalidAccountStatusException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
