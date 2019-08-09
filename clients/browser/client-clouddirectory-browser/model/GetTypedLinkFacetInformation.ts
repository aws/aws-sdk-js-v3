import { GetTypedLinkFacetInformationInput } from "./GetTypedLinkFacetInformationInput";
import { GetTypedLinkFacetInformationOutput } from "./GetTypedLinkFacetInformationOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { FacetNotFoundException } from "./FacetNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTypedLinkFacetInformation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTypedLinkFacetInformation",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/typedlink/facet/get"
  },
  input: {
    shape: GetTypedLinkFacetInformationInput
  },
  output: {
    shape: GetTypedLinkFacetInformationOutput
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
    },
    {
      shape: FacetNotFoundException
    }
  ]
};
