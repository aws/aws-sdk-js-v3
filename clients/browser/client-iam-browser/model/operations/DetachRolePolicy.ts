import { DetachRolePolicyInput } from "../shapes/DetachRolePolicyInput";
import { DetachRolePolicyOutput } from "../shapes/DetachRolePolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { UnmodifiableEntityException } from "../shapes/UnmodifiableEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
