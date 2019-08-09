import { RemoveRoleFromInstanceProfileInput } from "./RemoveRoleFromInstanceProfileInput";
import { RemoveRoleFromInstanceProfileOutput } from "./RemoveRoleFromInstanceProfileOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveRoleFromInstanceProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveRoleFromInstanceProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveRoleFromInstanceProfileInput
  },
  output: {
    shape: RemoveRoleFromInstanceProfileOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: UnmodifiableEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
