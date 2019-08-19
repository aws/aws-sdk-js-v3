import { UpdateLoginProfileInput } from "../shapes/UpdateLoginProfileInput";
import { UpdateLoginProfileOutput } from "../shapes/UpdateLoginProfileOutput";
import { EntityTemporarilyUnmodifiableException } from "../shapes/EntityTemporarilyUnmodifiableException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { PasswordPolicyViolationException } from "../shapes/PasswordPolicyViolationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
