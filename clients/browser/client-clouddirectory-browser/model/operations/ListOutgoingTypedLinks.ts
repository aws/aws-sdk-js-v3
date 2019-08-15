import { ListOutgoingTypedLinksInput } from "../shapes/ListOutgoingTypedLinksInput";
import { ListOutgoingTypedLinksOutput } from "../shapes/ListOutgoingTypedLinksOutput";
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

export const ListOutgoingTypedLinks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOutgoingTypedLinks",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/typedlink/outgoing"
  },
  input: {
    shape: ListOutgoingTypedLinksInput
  },
  output: {
    shape: ListOutgoingTypedLinksOutput
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
