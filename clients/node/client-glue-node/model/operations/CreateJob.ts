import { CreateJobInput } from "../shapes/CreateJobInput";
import { CreateJobOutput } from "../shapes/CreateJobOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateJobInput
  },
  output: {
    shape: CreateJobOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: IdempotentParameterMismatchException
    },
    {
      shape: AlreadyExistsException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: ResourceNumberLimitExceededException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
