import { AttachUserPolicyInput } from "./AttachUserPolicyInput";
import { AttachUserPolicyOutput } from "./AttachUserPolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyNotAttachableException } from "./PolicyNotAttachableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
