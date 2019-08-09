import { ChangePasswordInput } from "./ChangePasswordInput";
import { ChangePasswordOutput } from "./ChangePasswordOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidUserTypeException } from "./InvalidUserTypeException";
import { LimitExceededException } from "./LimitExceededException";
import { EntityTemporarilyUnmodifiableException } from "./EntityTemporarilyUnmodifiableException";
import { PasswordPolicyViolationException } from "./PasswordPolicyViolationException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
