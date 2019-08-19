import { GetOpenIdTokenInput } from "../shapes/GetOpenIdTokenInput";
import { GetOpenIdTokenOutput } from "../shapes/GetOpenIdTokenOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { ExternalServiceException } from "../shapes/ExternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetOpenIdToken: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetOpenIdToken",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetOpenIdTokenInput
  },
  output: {
    shape: GetOpenIdTokenOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: ResourceConflictException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: ExternalServiceException
    }
  ]
};
