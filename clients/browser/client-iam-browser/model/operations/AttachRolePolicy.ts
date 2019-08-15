import { AttachRolePolicyInput } from "../shapes/AttachRolePolicyInput";
import { AttachRolePolicyOutput } from "../shapes/AttachRolePolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { UnmodifiableEntityException } from "../shapes/UnmodifiableEntityException";
import { PolicyNotAttachableException } from "../shapes/PolicyNotAttachableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
