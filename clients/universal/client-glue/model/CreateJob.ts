import { CreateJobInput } from "./CreateJobInput";
import { CreateJobOutput } from "./CreateJobOutput";
import { InvalidInputException } from "./InvalidInputException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
