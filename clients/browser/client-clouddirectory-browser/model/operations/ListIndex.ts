import { ListIndexInput } from "../shapes/ListIndexInput";
import { ListIndexOutput } from "../shapes/ListIndexOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { FacetValidationException } from "../shapes/FacetValidationException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotIndexException } from "../shapes/NotIndexException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListIndex: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListIndex",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/index/targets"
  },
  input: {
    shape: ListIndexInput
  },
  output: {
    shape: ListIndexOutput
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
      shape: FacetValidationException
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
    },
    {
      shape: NotIndexException
    }
  ]
};
