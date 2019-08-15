import { CreateIndexInput } from "../shapes/CreateIndexInput";
import { CreateIndexOutput } from "../shapes/CreateIndexOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { FacetValidationException } from "../shapes/FacetValidationException";
import { LinkNameAlreadyInUseException } from "../shapes/LinkNameAlreadyInUseException";
import { UnsupportedIndexTypeException } from "../shapes/UnsupportedIndexTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateIndex: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateIndex",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/index"
  },
  input: {
    shape: CreateIndexInput
  },
  output: {
    shape: CreateIndexOutput
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
      shape: FacetValidationException
    },
    {
      shape: LinkNameAlreadyInUseException
    },
    {
      shape: UnsupportedIndexTypeException
    }
  ]
};
