import { UpdateScalingPlanInput } from "../shapes/UpdateScalingPlanInput";
import { UpdateScalingPlanOutput } from "../shapes/UpdateScalingPlanOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ConcurrentUpdateException } from "../shapes/ConcurrentUpdateException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { ObjectNotFoundException } from "../shapes/ObjectNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateScalingPlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateScalingPlan",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateScalingPlanInput
  },
  output: {
    shape: UpdateScalingPlanOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ConcurrentUpdateException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: ObjectNotFoundException
    }
  ]
};
