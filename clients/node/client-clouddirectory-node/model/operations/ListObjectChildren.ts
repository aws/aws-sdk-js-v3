import { ListObjectChildrenInput } from "../shapes/ListObjectChildrenInput";
import { ListObjectChildrenOutput } from "../shapes/ListObjectChildrenOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { NotNodeException } from "../shapes/NotNodeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListObjectChildren: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListObjectChildren",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/object/children"
  },
  input: {
    shape: ListObjectChildrenInput
  },
  output: {
    shape: ListObjectChildrenOutput
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
      shape: NotNodeException
    }
  ]
};
