import { GetIdentityProviderByIdentifierInput } from "./GetIdentityProviderByIdentifierInput";
import { GetIdentityProviderByIdentifierOutput } from "./GetIdentityProviderByIdentifierOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
