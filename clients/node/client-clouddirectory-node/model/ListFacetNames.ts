import { ListFacetNamesInput } from "./ListFacetNamesInput";
import { ListFacetNamesOutput } from "./ListFacetNamesOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListFacetNames: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFacetNames",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/facet/list"
  },
  input: {
    shape: ListFacetNamesInput
  },
  output: {
    shape: ListFacetNamesOutput
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
