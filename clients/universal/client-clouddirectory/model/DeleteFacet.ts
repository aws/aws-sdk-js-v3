import { DeleteFacetInput } from "./DeleteFacetInput";
import { DeleteFacetOutput } from "./DeleteFacetOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { FacetNotFoundException } from "./FacetNotFoundException";
import { FacetInUseException } from "./FacetInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
