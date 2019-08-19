import { GetIdentityPoolConfigurationInput } from "../shapes/GetIdentityPoolConfigurationInput";
import { GetIdentityPoolConfigurationOutput } from "../shapes/GetIdentityPoolConfigurationOutput";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
