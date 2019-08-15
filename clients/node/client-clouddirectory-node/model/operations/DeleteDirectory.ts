import { DeleteDirectoryInput } from "../shapes/DeleteDirectoryInput";
import { DeleteDirectoryOutput } from "../shapes/DeleteDirectoryOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { DirectoryNotDisabledException } from "../shapes/DirectoryNotDisabledException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryDeletedException } from "../shapes/DirectoryDeletedException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDirectory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDirectory",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/directory"
  },
  input: {
    shape: DeleteDirectoryInput
  },
  output: {
    shape: DeleteDirectoryOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: DirectoryNotDisabledException
    },
    {
      shape: InternalServiceException
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
      shape: DirectoryDeletedException
    },
    {
      shape: RetryableConflictException
    },
    {
      shape: InvalidArnException
    }
  ]
};
