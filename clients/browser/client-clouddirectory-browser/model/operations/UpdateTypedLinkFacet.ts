import { UpdateTypedLinkFacetInput } from "../shapes/UpdateTypedLinkFacetInput";
import { UpdateTypedLinkFacetOutput } from "../shapes/UpdateTypedLinkFacetOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { FacetValidationException } from "../shapes/FacetValidationException";
import { InvalidFacetUpdateException } from "../shapes/InvalidFacetUpdateException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { FacetNotFoundException } from "../shapes/FacetNotFoundException";
import { InvalidRuleException } from "../shapes/InvalidRuleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateTypedLinkFacet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTypedLinkFacet",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/typedlink/facet"
  },
  input: {
    shape: UpdateTypedLinkFacetInput
  },
  output: {
    shape: UpdateTypedLinkFacetOutput
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
      shape: FacetValidationException
    },
    {
      shape: InvalidFacetUpdateException
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
