import { CreateScalingPlanInput } from "../shapes/CreateScalingPlanInput";
import { CreateScalingPlanOutput } from "../shapes/CreateScalingPlanOutput";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ConcurrentUpdateException } from "../shapes/ConcurrentUpdateException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateScalingPlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateScalingPlan",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateScalingPlanInput
  },
  output: {
    shape: CreateScalingPlanOutput
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
