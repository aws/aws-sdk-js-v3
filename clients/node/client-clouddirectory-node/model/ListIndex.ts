import { ListIndexInput } from "./ListIndexInput";
import { ListIndexOutput } from "./ListIndexOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { FacetValidationException } from "./FacetValidationException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotIndexException } from "./NotIndexException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
