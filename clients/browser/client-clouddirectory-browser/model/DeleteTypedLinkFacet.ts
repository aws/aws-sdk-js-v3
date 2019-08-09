import { DeleteTypedLinkFacetInput } from "./DeleteTypedLinkFacetInput";
import { DeleteTypedLinkFacetOutput } from "./DeleteTypedLinkFacetOutput";
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

export const DeleteTypedLinkFacet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTypedLinkFacet",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/typedlink/facet/delete"
  },
  input: {
    shape: DeleteTypedLinkFacetInput
  },
  output: {
    shape: DeleteTypedLinkFacetOutput
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
