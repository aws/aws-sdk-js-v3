import { DeleteUserInput } from "../shapes/DeleteUserInput";
import { DeleteUserOutput } from "../shapes/DeleteUserOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { DeleteConflictException } from "../shapes/DeleteConflictException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteUserInput
  },
  output: {
    shape: DeleteUserOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: DeleteConflictException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
