import { AttachGroupPolicyInput } from "./AttachGroupPolicyInput";
import { AttachGroupPolicyOutput } from "./AttachGroupPolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyNotAttachableException } from "./PolicyNotAttachableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
