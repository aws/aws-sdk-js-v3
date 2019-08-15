import { GetIdentityProviderByIdentifierInput } from "../shapes/GetIdentityProviderByIdentifierInput";
import { GetIdentityProviderByIdentifierOutput } from "../shapes/GetIdentityProviderByIdentifierOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetIdentityProviderByIdentifier: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIdentityProviderByIdentifier",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetIdentityProviderByIdentifierInput
  },
  output: {
    shape: GetIdentityProviderByIdentifierOutput
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
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    }
  ]
};
