import { DetachGroupPolicyInput } from "../shapes/DetachGroupPolicyInput";
import { DetachGroupPolicyOutput } from "../shapes/DetachGroupPolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
