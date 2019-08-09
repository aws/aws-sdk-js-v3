import { DeleteObjectInput } from "./DeleteObjectInput";
import { DeleteObjectOutput } from "./DeleteObjectOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ObjectNotDetachedException } from "./ObjectNotDetachedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
