import { CreateDeploymentJobInput } from "./CreateDeploymentJobInput";
import { CreateDeploymentJobOutput } from "./CreateDeploymentJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentDeploymentException } from "./ConcurrentDeploymentException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDeploymentJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDeploymentJob",
  http: {
    method: "POST",
    requestUri: "/createDeploymentJob"
  },
  input: {
    shape: CreateDeploymentJobInput
  },
  output: {
    shape: CreateDeploymentJobOutput
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
