import { DetachGroupPolicyInput } from "./DetachGroupPolicyInput";
import { DetachGroupPolicyOutput } from "./DetachGroupPolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetachGroupPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachGroupPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachGroupPolicyInput
  },
  output: {
    shape: DetachGroupPolicyOutput
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
      shape: ServiceFailureException
    }
  ]
};
