import { DeleteGroupPolicyInput } from "../shapes/DeleteGroupPolicyInput";
import { DeleteGroupPolicyOutput } from "../shapes/DeleteGroupPolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
