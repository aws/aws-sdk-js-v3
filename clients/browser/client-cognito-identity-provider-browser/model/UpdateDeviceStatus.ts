import { UpdateDeviceStatusInput } from "./UpdateDeviceStatusInput";
import { UpdateDeviceStatusOutput } from "./UpdateDeviceStatusOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateDeviceStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDeviceStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDeviceStatusInput
  },
  output: {
    shape: UpdateDeviceStatusOutput
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
