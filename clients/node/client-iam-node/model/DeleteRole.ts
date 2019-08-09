import { DeleteRoleInput } from "./DeleteRoleInput";
import { DeleteRoleOutput } from "./DeleteRoleOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { DeleteConflictException } from "./DeleteConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
