import { CreateDirectoryInput } from "./CreateDirectoryInput";
import { CreateDirectoryOutput } from "./CreateDirectoryOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryAlreadyExistsException } from "./DirectoryAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDirectory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDirectory",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/directory/create"
  },
  input: {
    shape: CreateDirectoryInput
  },
  output: {
    shape: CreateDirectoryOutput
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
      shape: DirectoryAlreadyExistsException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
