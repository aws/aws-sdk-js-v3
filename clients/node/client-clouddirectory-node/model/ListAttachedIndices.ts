import { ListAttachedIndicesInput } from "./ListAttachedIndicesInput";
import { ListAttachedIndicesOutput } from "./ListAttachedIndicesOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAttachedIndices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAttachedIndices",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/object/indices"
  },
  input: {
    shape: ListAttachedIndicesInput
  },
  output: {
    shape: ListAttachedIndicesOutput
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
    }
  ]
};
