import { SetIdentityPoolConfigurationInput } from "./SetIdentityPoolConfigurationInput";
import { SetIdentityPoolConfigurationOutput } from "./SetIdentityPoolConfigurationOutput";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
