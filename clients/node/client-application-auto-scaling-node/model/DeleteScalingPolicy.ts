import { DeleteScalingPolicyInput } from "./DeleteScalingPolicyInput";
import { DeleteScalingPolicyOutput } from "./DeleteScalingPolicyOutput";
import { ValidationException } from "./ValidationException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
