import { ListFacetAttributesInput } from "../shapes/ListFacetAttributesInput";
import { ListFacetAttributesOutput } from "../shapes/ListFacetAttributesOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { FacetNotFoundException } from "../shapes/FacetNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFacetAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFacetAttributes",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/facet/attributes"
  },
  input: {
    shape: ListFacetAttributesInput
  },
  output: {
    shape: ListFacetAttributesOutput
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
      shape: ResourceNotFoundException
    },
    {
      shape: FacetNotFoundException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
