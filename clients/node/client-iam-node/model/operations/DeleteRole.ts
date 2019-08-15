import { DeleteRoleInput } from "../shapes/DeleteRoleInput";
import { DeleteRoleOutput } from "../shapes/DeleteRoleOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { DeleteConflictException } from "../shapes/DeleteConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { UnmodifiableEntityException } from "../shapes/UnmodifiableEntityException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRole",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRoleInput
  },
  output: {
    shape: DeleteRoleOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: DeleteConflictException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: UnmodifiableEntityException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
