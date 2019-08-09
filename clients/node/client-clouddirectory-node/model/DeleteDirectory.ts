import { DeleteDirectoryInput } from "./DeleteDirectoryInput";
import { DeleteDirectoryOutput } from "./DeleteDirectoryOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DirectoryNotDisabledException } from "./DirectoryNotDisabledException";
import { InternalServiceException } from "./InternalServiceException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryDeletedException } from "./DirectoryDeletedException";
import { RetryableConflictException } from "./RetryableConflictException";
import { InvalidArnException } from "./InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
