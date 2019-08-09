import { ListObjectParentPathsInput } from "./ListObjectParentPathsInput";
import { ListObjectParentPathsOutput } from "./ListObjectParentPathsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListObjectParentPaths: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListObjectParentPaths",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/object/parentpaths"
  },
  input: {
    shape: ListObjectParentPathsInput
  },
  output: {
    shape: ListObjectParentPathsOutput
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
      shape: InvalidNextTokenException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
