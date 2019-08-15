import { UpdateFacetInput } from "../shapes/UpdateFacetInput";
import { UpdateFacetOutput } from "../shapes/UpdateFacetOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidFacetUpdateException } from "../shapes/InvalidFacetUpdateException";
import { FacetValidationException } from "../shapes/FacetValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { FacetNotFoundException } from "../shapes/FacetNotFoundException";
import { InvalidRuleException } from "../shapes/InvalidRuleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFacet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFacet",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/facet"
  },
  input: {
    shape: UpdateFacetInput
  },
  output: {
    shape: UpdateFacetOutput
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
      shape: InvalidFacetUpdateException
    },
    {
      shape: FacetValidationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: FacetNotFoundException
    },
    {
      shape: InvalidRuleException
    }
  ]
};
