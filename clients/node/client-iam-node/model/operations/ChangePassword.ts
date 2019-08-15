import { ChangePasswordInput } from "../shapes/ChangePasswordInput";
import { ChangePasswordOutput } from "../shapes/ChangePasswordOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidUserTypeException } from "../shapes/InvalidUserTypeException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { EntityTemporarilyUnmodifiableException } from "../shapes/EntityTemporarilyUnmodifiableException";
import { PasswordPolicyViolationException } from "../shapes/PasswordPolicyViolationException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ChangePassword: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ChangePassword",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ChangePasswordInput
  },
  output: {
    shape: ChangePasswordOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: InvalidUserTypeException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: EntityTemporarilyUnmodifiableException
    },
    {
      shape: PasswordPolicyViolationException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
