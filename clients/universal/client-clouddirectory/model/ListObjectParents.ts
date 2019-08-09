import { ListObjectParentsInput } from "./ListObjectParentsInput";
import { ListObjectParentsOutput } from "./ListObjectParentsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { CannotListParentOfRootException } from "./CannotListParentOfRootException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
