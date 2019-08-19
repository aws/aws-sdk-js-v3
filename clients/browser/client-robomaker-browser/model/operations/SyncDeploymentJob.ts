import { SyncDeploymentJobInput } from "../shapes/SyncDeploymentJobInput";
import { SyncDeploymentJobOutput } from "../shapes/SyncDeploymentJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ConcurrentDeploymentException } from "../shapes/ConcurrentDeploymentException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SyncDeploymentJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SyncDeploymentJob",
  http: {
    method: "POST",
    requestUri: "/syncDeploymentJob"
  },
  input: {
    shape: SyncDeploymentJobInput
  },
  output: {
    shape: SyncDeploymentJobOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServerException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ConcurrentDeploymentException
    },
    {
      shape: IdempotentParameterMismatchException
    }
  ]
};
