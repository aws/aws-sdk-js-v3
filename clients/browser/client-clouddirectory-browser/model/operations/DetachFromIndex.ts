import { DetachFromIndexInput } from "../shapes/DetachFromIndexInput";
import { DetachFromIndexOutput } from "../shapes/DetachFromIndexOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ObjectAlreadyDetachedException } from "../shapes/ObjectAlreadyDetachedException";
import { NotIndexException } from "../shapes/NotIndexException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
