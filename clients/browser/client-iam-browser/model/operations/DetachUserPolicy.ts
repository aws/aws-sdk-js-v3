import { DetachUserPolicyInput } from "../shapes/DetachUserPolicyInput";
import { DetachUserPolicyOutput } from "../shapes/DetachUserPolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DetachUserPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachUserPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachUserPolicyInput
  },
  output: {
    shape: DetachUserPolicyOutput
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
