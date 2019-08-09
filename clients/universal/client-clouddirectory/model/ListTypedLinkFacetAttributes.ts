import { ListTypedLinkFacetAttributesInput } from "./ListTypedLinkFacetAttributesInput";
import { ListTypedLinkFacetAttributesOutput } from "./ListTypedLinkFacetAttributesOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { FacetNotFoundException } from "./FacetNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListTypedLinkFacetAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTypedLinkFacetAttributes",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/typedlink/facet/attributes"
  },
  input: {
    shape: ListTypedLinkFacetAttributesInput
  },
  output: {
    shape: ListTypedLinkFacetAttributesOutput
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
