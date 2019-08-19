import { ListIncomingTypedLinksInput } from "../shapes/ListIncomingTypedLinksInput";
import { ListIncomingTypedLinksOutput } from "../shapes/ListIncomingTypedLinksOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { FacetValidationException } from "../shapes/FacetValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListIncomingTypedLinks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListIncomingTypedLinks",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/typedlink/incoming"
  },
  input: {
    shape: ListIncomingTypedLinksInput
  },
  output: {
    shape: ListIncomingTypedLinksOutput
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
      shape: InvalidNextTokenException
    },
    {
      shape: FacetValidationException
    }
  ]
};
