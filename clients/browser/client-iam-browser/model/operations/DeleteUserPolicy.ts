import { DeleteUserPolicyInput } from "../shapes/DeleteUserPolicyInput";
import { DeleteUserPolicyOutput } from "../shapes/DeleteUserPolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
