import { CreateTypedLinkFacetInput } from "../shapes/CreateTypedLinkFacetInput";
import { CreateTypedLinkFacetOutput } from "../shapes/CreateTypedLinkFacetOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { FacetAlreadyExistsException } from "../shapes/FacetAlreadyExistsException";
import { InvalidRuleException } from "../shapes/InvalidRuleException";
import { FacetValidationException } from "../shapes/FacetValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTypedLinkFacet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTypedLinkFacet",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/typedlink/facet/create"
  },
  input: {
    shape: CreateTypedLinkFacetInput
  },
  output: {
    shape: CreateTypedLinkFacetOutput
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
      shape: FacetAlreadyExistsException
    },
    {
      shape: InvalidRuleException
    },
    {
      shape: FacetValidationException
    }
  ]
};
