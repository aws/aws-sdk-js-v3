import { CreateFacetInput } from "./CreateFacetInput";
import { CreateFacetOutput } from "./CreateFacetOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { FacetAlreadyExistsException } from "./FacetAlreadyExistsException";
import { InvalidRuleException } from "./InvalidRuleException";
import { FacetValidationException } from "./FacetValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateFacet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFacet",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/facet/create"
  },
  input: {
    shape: CreateFacetInput
  },
  output: {
    shape: CreateFacetOutput
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
