import { DetachRolePolicyInput } from "./DetachRolePolicyInput";
import { DetachRolePolicyOutput } from "./DetachRolePolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetachRolePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachRolePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachRolePolicyInput
  },
  output: {
    shape: DetachRolePolicyOutput
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
      shape: ServiceFailureException
    }
  ]
};
