import { DeregisterScalableTargetInput } from "./DeregisterScalableTargetInput";
import { DeregisterScalableTargetOutput } from "./DeregisterScalableTargetOutput";
import { ValidationException } from "./ValidationException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
