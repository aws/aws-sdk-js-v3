import { ForgetDeviceInput } from "../shapes/ForgetDeviceInput";
import { ForgetDeviceOutput } from "../shapes/ForgetDeviceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidUserPoolConfigurationException } from "../shapes/InvalidUserPoolConfigurationException";
import { PasswordResetRequiredException } from "../shapes/PasswordResetRequiredException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { UserNotConfirmedException } from "../shapes/UserNotConfirmedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ForgetDevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ForgetDevice",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ForgetDeviceInput
  },
  output: {
    shape: ForgetDeviceOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidUserPoolConfigurationException
    },
    {
      shape: PasswordResetRequiredException
    },
    {
      shape: UserNotFoundException
    },
    {
      shape: UserNotConfirmedException
    },
    {
      shape: InternalErrorException
    }
  ]
};
