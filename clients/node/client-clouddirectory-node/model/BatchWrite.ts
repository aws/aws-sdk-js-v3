import { BatchWriteInput } from "./BatchWriteInput";
import { BatchWriteOutput } from "./BatchWriteOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { BatchWriteException } from "./BatchWriteException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchWrite: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchWrite",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/batchwrite"
  },
  input: {
    shape: BatchWriteInput
  },
  output: {
    shape: BatchWriteOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: RetryableConflictException
    },
    {
      shape: ValidationException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: DirectoryNotEnabledException
    },
    {
      shape: BatchWriteException
    }
  ]
};
