import { UpdateTypedLinkFacetInput } from "./UpdateTypedLinkFacetInput";
import { UpdateTypedLinkFacetOutput } from "./UpdateTypedLinkFacetOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { FacetValidationException } from "./FacetValidationException";
import { InvalidFacetUpdateException } from "./InvalidFacetUpdateException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { FacetNotFoundException } from "./FacetNotFoundException";
import { InvalidRuleException } from "./InvalidRuleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
