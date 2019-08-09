import { CreateScalingPlanInput } from "./CreateScalingPlanInput";
import { CreateScalingPlanOutput } from "./CreateScalingPlanOutput";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
