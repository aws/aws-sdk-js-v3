import { RegisterDeviceInput } from "./RegisterDeviceInput";
import { RegisterDeviceOutput } from "./RegisterDeviceOutput";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidConfigurationException } from "./InvalidConfigurationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterDevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterDevice",
  http: {
    method: "POST",
    requestUri: "/identitypools/{IdentityPoolId}/identity/{IdentityId}/device"
  },
  input: {
    shape: RegisterDeviceInput
  },
  output: {
    shape: RegisterDeviceOutput
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
      shape: InvalidConfigurationException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
