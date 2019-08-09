import { DetachFromIndexInput } from "./DetachFromIndexInput";
import { DetachFromIndexOutput } from "./DetachFromIndexOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ObjectAlreadyDetachedException } from "./ObjectAlreadyDetachedException";
import { NotIndexException } from "./NotIndexException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetachFromIndex: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachFromIndex",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/index/detach"
  },
  input: {
    shape: DetachFromIndexInput
  },
  output: {
    shape: DetachFromIndexOutput
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
      shape: ObjectAlreadyDetachedException
    },
    {
      shape: NotIndexException
    }
  ]
};
