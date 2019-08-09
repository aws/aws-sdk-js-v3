import { DetachUserPolicyInput } from "./DetachUserPolicyInput";
import { DetachUserPolicyOutput } from "./DetachUserPolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
