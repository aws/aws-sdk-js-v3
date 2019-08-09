import { GetIdentityPoolConfigurationInput } from "./GetIdentityPoolConfigurationInput";
import { GetIdentityPoolConfigurationOutput } from "./GetIdentityPoolConfigurationOutput";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetIdentityPoolConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIdentityPoolConfiguration",
  http: {
    method: "GET",
    requestUri: "/identitypools/{IdentityPoolId}/configuration"
  },
  input: {
    shape: GetIdentityPoolConfigurationInput
  },
  output: {
    shape: GetIdentityPoolConfigurationOutput
  },
  errors: [
    {
      shape: NotAuthorizedException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
