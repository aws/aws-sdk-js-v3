import { DeleteScalingPlanInput } from "./DeleteScalingPlanInput";
import { DeleteScalingPlanOutput } from "./DeleteScalingPlanOutput";
import { ValidationException } from "./ValidationException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
