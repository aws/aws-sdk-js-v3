import { DisableDirectoryInput } from "../shapes/DisableDirectoryInput";
import { DisableDirectoryOutput } from "../shapes/DisableDirectoryOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { DirectoryDeletedException } from "../shapes/DirectoryDeletedException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
