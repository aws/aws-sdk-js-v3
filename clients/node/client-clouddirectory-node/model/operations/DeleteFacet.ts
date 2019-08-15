import { DeleteFacetInput } from "../shapes/DeleteFacetInput";
import { DeleteFacetOutput } from "../shapes/DeleteFacetOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { FacetNotFoundException } from "../shapes/FacetNotFoundException";
import { FacetInUseException } from "../shapes/FacetInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFacet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFacet",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/facet/delete"
  },
  input: {
    shape: DeleteFacetInput
  },
  output: {
    shape: DeleteFacetOutput
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
      shape: FacetInUseException
    }
  ]
};
