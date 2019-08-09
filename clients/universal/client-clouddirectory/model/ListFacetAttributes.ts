import { ListFacetAttributesInput } from "./ListFacetAttributesInput";
import { ListFacetAttributesOutput } from "./ListFacetAttributesOutput";
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
