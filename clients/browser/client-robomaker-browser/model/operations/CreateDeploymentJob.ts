import { CreateDeploymentJobInput } from "../shapes/CreateDeploymentJobInput";
import { CreateDeploymentJobOutput } from "../shapes/CreateDeploymentJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ConcurrentDeploymentException } from "../shapes/ConcurrentDeploymentException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
