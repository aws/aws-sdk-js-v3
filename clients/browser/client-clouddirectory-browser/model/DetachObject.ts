import { DetachObjectInput } from "./DetachObjectInput";
import { DetachObjectOutput } from "./DetachObjectOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotNodeException } from "./NotNodeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetachObject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachObject",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/object/detach"
  },
  input: {
    shape: DetachObjectInput
  },
  output: {
    shape: DetachObjectOutput
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
      shape: ResourceNotFoundException
    },
    {
      shape: NotNodeException
    }
  ]
};
