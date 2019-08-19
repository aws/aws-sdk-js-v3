import { GetOpenIdTokenForDeveloperIdentityInput } from "../shapes/GetOpenIdTokenForDeveloperIdentityInput";
import { GetOpenIdTokenForDeveloperIdentityOutput } from "../shapes/GetOpenIdTokenForDeveloperIdentityOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { DeveloperUserAlreadyRegisteredException } from "../shapes/DeveloperUserAlreadyRegisteredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetOpenIdTokenForDeveloperIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetOpenIdTokenForDeveloperIdentity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetOpenIdTokenForDeveloperIdentityInput
  },
  output: {
    shape: GetOpenIdTokenForDeveloperIdentityOutput
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
      shape: DeveloperUserAlreadyRegisteredException
    }
  ]
};
