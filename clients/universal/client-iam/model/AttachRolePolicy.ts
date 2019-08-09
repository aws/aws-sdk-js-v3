import { AttachRolePolicyInput } from "./AttachRolePolicyInput";
import { AttachRolePolicyOutput } from "./AttachRolePolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { PolicyNotAttachableException } from "./PolicyNotAttachableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AttachRolePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachRolePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AttachRolePolicyInput
  },
  output: {
    shape: AttachRolePolicyOutput
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
      shape: UnmodifiableEntityException
    },
    {
      shape: PolicyNotAttachableException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
