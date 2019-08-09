import { RegisterScalableTargetInput } from "./RegisterScalableTargetInput";
import { RegisterScalableTargetOutput } from "./RegisterScalableTargetOutput";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterScalableTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterScalableTarget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterScalableTargetInput
  },
  output: {
    shape: RegisterScalableTargetOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ConcurrentUpdateException
    },
    {
      shape: InternalServiceException
    }
  ]
};
