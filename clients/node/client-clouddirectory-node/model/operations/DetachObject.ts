import { DetachObjectInput } from "../shapes/DetachObjectInput";
import { DetachObjectOutput } from "../shapes/DetachObjectOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotNodeException } from "../shapes/NotNodeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
