import { DeleteScalingPolicyInput } from "../shapes/DeleteScalingPolicyInput";
import { DeleteScalingPolicyOutput } from "../shapes/DeleteScalingPolicyOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ObjectNotFoundException } from "../shapes/ObjectNotFoundException";
import { ConcurrentUpdateException } from "../shapes/ConcurrentUpdateException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteScalingPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteScalingPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteScalingPolicyInput
  },
  output: {
    shape: DeleteScalingPolicyOutput
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
