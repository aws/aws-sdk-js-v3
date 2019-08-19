import { BatchWriteInput } from "../shapes/BatchWriteInput";
import { BatchWriteOutput } from "../shapes/BatchWriteOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { BatchWriteException } from "../shapes/BatchWriteException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
