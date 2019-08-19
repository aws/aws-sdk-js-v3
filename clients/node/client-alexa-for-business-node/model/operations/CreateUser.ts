import { CreateUserInput } from "../shapes/CreateUserInput";
import { CreateUserOutput } from "../shapes/CreateUserOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
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
      shape: ResourceInUseException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
