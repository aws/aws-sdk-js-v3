import { AttachUserPolicyInput } from "../shapes/AttachUserPolicyInput";
import { AttachUserPolicyOutput } from "../shapes/AttachUserPolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { PolicyNotAttachableException } from "../shapes/PolicyNotAttachableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AttachUserPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachUserPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AttachUserPolicyInput
  },
  output: {
    shape: AttachUserPolicyOutput
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
