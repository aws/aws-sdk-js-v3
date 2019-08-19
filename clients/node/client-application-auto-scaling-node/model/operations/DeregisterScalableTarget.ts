import { DeregisterScalableTargetInput } from "../shapes/DeregisterScalableTargetInput";
import { DeregisterScalableTargetOutput } from "../shapes/DeregisterScalableTargetOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ObjectNotFoundException } from "../shapes/ObjectNotFoundException";
import { ConcurrentUpdateException } from "../shapes/ConcurrentUpdateException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeregisterScalableTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterScalableTarget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterScalableTargetInput
  },
  output: {
    shape: DeregisterScalableTargetOutput
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
