import { ListObjectParentPathsInput } from "../shapes/ListObjectParentPathsInput";
import { ListObjectParentPathsOutput } from "../shapes/ListObjectParentPathsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
