import { EnableDirectoryInput } from "./EnableDirectoryInput";
import { EnableDirectoryOutput } from "./EnableDirectoryOutput";
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

export const EnableDirectory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableDirectory",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/directory/enable"
  },
  input: {
    shape: EnableDirectoryInput
  },
  output: {
    shape: EnableDirectoryOutput
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
