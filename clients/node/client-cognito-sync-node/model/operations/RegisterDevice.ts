import { RegisterDeviceInput } from "../shapes/RegisterDeviceInput";
import { RegisterDeviceOutput } from "../shapes/RegisterDeviceOutput";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidConfigurationException } from "../shapes/InvalidConfigurationException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
