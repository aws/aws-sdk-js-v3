import { ConfirmDeviceInput } from "../shapes/ConfirmDeviceInput";
import { ConfirmDeviceOutput } from "../shapes/ConfirmDeviceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidPasswordException } from "../shapes/InvalidPasswordException";
import { InvalidLambdaResponseException } from "../shapes/InvalidLambdaResponseException";
import { UsernameExistsException } from "../shapes/UsernameExistsException";
import { InvalidUserPoolConfigurationException } from "../shapes/InvalidUserPoolConfigurationException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { PasswordResetRequiredException } from "../shapes/PasswordResetRequiredException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { UserNotConfirmedException } from "../shapes/UserNotConfirmedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ConfirmDevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ConfirmDevice",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ConfirmDeviceInput
  },
  output: {
    shape: ConfirmDeviceOutput
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
      shape: InvalidPasswordException
    },
    {
      shape: InvalidLambdaResponseException
    },
    {
      shape: UsernameExistsException
    },
    {
      shape: InvalidUserPoolConfigurationException
    },
    {
      shape: TooManyRequestsException
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
