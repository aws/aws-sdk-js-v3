import { CreateDirectoryInput } from "../shapes/CreateDirectoryInput";
import { CreateDirectoryOutput } from "../shapes/CreateDirectoryOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryAlreadyExistsException } from "../shapes/DirectoryAlreadyExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
