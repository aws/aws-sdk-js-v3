import { DeleteGroupPolicyInput } from "./DeleteGroupPolicyInput";
import { DeleteGroupPolicyOutput } from "./DeleteGroupPolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteGroupPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteGroupPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteGroupPolicyInput
  },
  output: {
    shape: DeleteGroupPolicyOutput
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
