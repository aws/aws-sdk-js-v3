import { RegisterScalableTargetInput } from "../shapes/RegisterScalableTargetInput";
import { RegisterScalableTargetOutput } from "../shapes/RegisterScalableTargetOutput";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ConcurrentUpdateException } from "../shapes/ConcurrentUpdateException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
