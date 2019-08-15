import { GetFacetInput } from "../shapes/GetFacetInput";
import { GetFacetOutput } from "../shapes/GetFacetOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { FacetNotFoundException } from "../shapes/FacetNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
