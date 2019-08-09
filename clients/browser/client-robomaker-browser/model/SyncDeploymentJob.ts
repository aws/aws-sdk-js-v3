import { SyncDeploymentJobInput } from "./SyncDeploymentJobInput";
import { SyncDeploymentJobOutput } from "./SyncDeploymentJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentDeploymentException } from "./ConcurrentDeploymentException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
