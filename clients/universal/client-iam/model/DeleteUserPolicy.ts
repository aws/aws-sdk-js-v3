import { DeleteUserPolicyInput } from "./DeleteUserPolicyInput";
import { DeleteUserPolicyOutput } from "./DeleteUserPolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteUserPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUserPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteUserPolicyInput
  },
  output: {
    shape: DeleteUserPolicyOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
