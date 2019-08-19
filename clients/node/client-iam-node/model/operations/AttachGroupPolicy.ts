import { AttachGroupPolicyInput } from "../shapes/AttachGroupPolicyInput";
import { AttachGroupPolicyOutput } from "../shapes/AttachGroupPolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { PolicyNotAttachableException } from "../shapes/PolicyNotAttachableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AttachGroupPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachGroupPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AttachGroupPolicyInput
  },
  output: {
    shape: AttachGroupPolicyOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: PolicyNotAttachableException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
