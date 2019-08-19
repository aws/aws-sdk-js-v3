import { UpdateUserInput } from "../shapes/UpdateUserInput";
import { UpdateUserOutput } from "../shapes/UpdateUserOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { EntityTemporarilyUnmodifiableException } from "../shapes/EntityTemporarilyUnmodifiableException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateUserInput
  },
  output: {
    shape: UpdateUserOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: EntityTemporarilyUnmodifiableException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
