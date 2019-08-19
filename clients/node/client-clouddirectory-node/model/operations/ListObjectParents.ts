import { ListObjectParentsInput } from "../shapes/ListObjectParentsInput";
import { ListObjectParentsOutput } from "../shapes/ListObjectParentsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { CannotListParentOfRootException } from "../shapes/CannotListParentOfRootException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListObjectParents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListObjectParents",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/object/parent"
  },
  input: {
    shape: ListObjectParentsInput
  },
  output: {
    shape: ListObjectParentsOutput
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
      shape: InvalidNextTokenException
    },
    {
      shape: CannotListParentOfRootException
    }
  ]
};
