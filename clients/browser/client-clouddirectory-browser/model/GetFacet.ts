import { GetFacetInput } from "./GetFacetInput";
import { GetFacetOutput } from "./GetFacetOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { FacetNotFoundException } from "./FacetNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetFacet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFacet",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/facet"
  },
  input: {
    shape: GetFacetInput
  },
  output: {
    shape: GetFacetOutput
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
    }
  ]
};
