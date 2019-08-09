import { UpdateLoginProfileInput } from "./UpdateLoginProfileInput";
import { UpdateLoginProfileOutput } from "./UpdateLoginProfileOutput";
import { EntityTemporarilyUnmodifiableException } from "./EntityTemporarilyUnmodifiableException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { PasswordPolicyViolationException } from "./PasswordPolicyViolationException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateLoginProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateLoginProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateLoginProfileInput
  },
  output: {
    shape: UpdateLoginProfileOutput
  },
  errors: [
    {
      shape: EntityTemporarilyUnmodifiableException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: PasswordPolicyViolationException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
