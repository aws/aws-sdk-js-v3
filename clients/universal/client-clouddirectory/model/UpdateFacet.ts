import { UpdateFacetInput } from "./UpdateFacetInput";
import { UpdateFacetOutput } from "./UpdateFacetOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidFacetUpdateException } from "./InvalidFacetUpdateException";
import { FacetValidationException } from "./FacetValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { FacetNotFoundException } from "./FacetNotFoundException";
import { InvalidRuleException } from "./InvalidRuleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
