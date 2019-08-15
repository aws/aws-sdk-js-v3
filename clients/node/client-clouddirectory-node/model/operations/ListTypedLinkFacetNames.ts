import { ListTypedLinkFacetNamesInput } from "../shapes/ListTypedLinkFacetNamesInput";
import { ListTypedLinkFacetNamesOutput } from "../shapes/ListTypedLinkFacetNamesOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTypedLinkFacetNames: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTypedLinkFacetNames",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/typedlink/facet/list"
  },
  input: {
    shape: ListTypedLinkFacetNamesInput
  },
  output: {
    shape: ListTypedLinkFacetNamesOutput
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
      shape: InvalidNextTokenException
    }
  ]
};
