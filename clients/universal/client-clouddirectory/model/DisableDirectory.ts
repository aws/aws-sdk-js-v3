import { DisableDirectoryInput } from "./DisableDirectoryInput";
import { DisableDirectoryOutput } from "./DisableDirectoryOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DirectoryDeletedException } from "./DirectoryDeletedException";
import { InternalServiceException } from "./InternalServiceException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RetryableConflictException } from "./RetryableConflictException";
import { InvalidArnException } from "./InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisableDirectory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableDirectory",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/directory/disable"
  },
  input: {
    shape: DisableDirectoryInput
  },
  output: {
    shape: DisableDirectoryOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: DirectoryDeletedException
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
      shape: RetryableConflictException
    },
    {
      shape: InvalidArnException
    }
  ]
};
