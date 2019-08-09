import { PutScalingPolicyInput } from "./PutScalingPolicyInput";
import { PutScalingPolicyOutput } from "./PutScalingPolicyOutput";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { FailedResourceAccessException } from "./FailedResourceAccessException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutScalingPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutScalingPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutScalingPolicyInput
  },
  output: {
    shape: PutScalingPolicyOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ObjectNotFoundException
    },
    {
      shape: ConcurrentUpdateException
    },
    {
      shape: FailedResourceAccessException
    },
    {
      shape: InternalServiceException
    }
  ]
};
