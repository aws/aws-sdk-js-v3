import { RemoveFacetFromObjectInput } from "../shapes/RemoveFacetFromObjectInput";
import { RemoveFacetFromObjectOutput } from "../shapes/RemoveFacetFromObjectOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { FacetValidationException } from "../shapes/FacetValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveFacetFromObject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveFacetFromObject",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/object/facets/delete"
  },
  input: {
    shape: RemoveFacetFromObjectInput
  },
  output: {
    shape: RemoveFacetFromObjectOutput
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
    }
  ]
};
