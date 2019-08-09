import { DeleteRolePolicyInput } from "./DeleteRolePolicyInput";
import { DeleteRolePolicyOutput } from "./DeleteRolePolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteRolePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRolePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRolePolicyInput
  },
  output: {
    shape: DeleteRolePolicyOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: UnmodifiableEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
