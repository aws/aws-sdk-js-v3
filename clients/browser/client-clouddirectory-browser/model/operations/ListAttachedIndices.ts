import { ListAttachedIndicesInput } from "../shapes/ListAttachedIndicesInput";
import { ListAttachedIndicesOutput } from "../shapes/ListAttachedIndicesOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
