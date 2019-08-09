import { CreateUserInput } from "./CreateUserInput";
import { CreateUserOutput } from "./CreateUserOutput";
import { LimitExceededException } from "./LimitExceededException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceFailureException } from "./ServiceFailureException";
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
    shape: CreateUserOutput,
    resultWrapper: "CreateUserResult"
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
