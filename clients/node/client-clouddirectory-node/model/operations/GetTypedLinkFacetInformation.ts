import { GetTypedLinkFacetInformationInput } from "../shapes/GetTypedLinkFacetInformationInput";
import { GetTypedLinkFacetInformationOutput } from "../shapes/GetTypedLinkFacetInformationOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { FacetNotFoundException } from "../shapes/FacetNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
