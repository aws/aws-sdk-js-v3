import { RemoveRoleFromInstanceProfileInput } from "../shapes/RemoveRoleFromInstanceProfileInput";
import { RemoveRoleFromInstanceProfileOutput } from "../shapes/RemoveRoleFromInstanceProfileOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { UnmodifiableEntityException } from "../shapes/UnmodifiableEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
