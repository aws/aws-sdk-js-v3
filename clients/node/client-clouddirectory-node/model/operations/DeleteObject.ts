import { DeleteObjectInput } from "../shapes/DeleteObjectInput";
import { DeleteObjectOutput } from "../shapes/DeleteObjectOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ObjectNotDetachedException } from "../shapes/ObjectNotDetachedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteObject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteObject",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/object/delete"
  },
  input: {
    shape: DeleteObjectInput
  },
  output: {
    shape: DeleteObjectOutput
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
      shape: ObjectNotDetachedException
    }
  ]
};
