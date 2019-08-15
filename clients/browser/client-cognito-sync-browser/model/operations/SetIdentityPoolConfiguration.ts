import { SetIdentityPoolConfigurationInput } from "../shapes/SetIdentityPoolConfigurationInput";
import { SetIdentityPoolConfigurationOutput } from "../shapes/SetIdentityPoolConfigurationOutput";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetIdentityPoolConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetIdentityPoolConfiguration",
  http: {
    method: "POST",
    requestUri: "/identitypools/{IdentityPoolId}/configuration"
  },
  input: {
    shape: SetIdentityPoolConfigurationInput
  },
  output: {
    shape: SetIdentityPoolConfigurationOutput
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
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
