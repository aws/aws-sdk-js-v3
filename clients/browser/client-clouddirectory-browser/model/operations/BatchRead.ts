import { BatchReadInput } from "../shapes/BatchReadInput";
import { BatchReadOutput } from "../shapes/BatchReadOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
