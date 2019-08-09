import { UpdateScalingPlanInput } from "./UpdateScalingPlanInput";
import { UpdateScalingPlanOutput } from "./UpdateScalingPlanOutput";
import { ValidationException } from "./ValidationException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
