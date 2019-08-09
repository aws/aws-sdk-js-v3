import { BatchReadInput } from "./BatchReadInput";
import { BatchReadOutput } from "./BatchReadOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchRead: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchRead",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/batchread"
  },
  input: {
    shape: BatchReadInput
  },
  output: {
    shape: BatchReadOutput
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
    }
  ]
};
