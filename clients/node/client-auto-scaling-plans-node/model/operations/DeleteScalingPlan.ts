import { DeleteScalingPlanInput } from "../shapes/DeleteScalingPlanInput";
import { DeleteScalingPlanOutput } from "../shapes/DeleteScalingPlanOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ObjectNotFoundException } from "../shapes/ObjectNotFoundException";
import { ConcurrentUpdateException } from "../shapes/ConcurrentUpdateException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteScalingPlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteScalingPlan",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteScalingPlanInput
  },
  output: {
    shape: DeleteScalingPlanOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ObjectNotFoundException
    },
    {
      shape: ConcurrentUpdateException
    },
    {
      shape: InternalServiceException
    }
  ]
};
