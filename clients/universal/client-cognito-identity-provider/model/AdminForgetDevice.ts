import { AdminForgetDeviceInput } from "./AdminForgetDeviceInput";
import { AdminForgetDeviceOutput } from "./AdminForgetDeviceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AdminForgetDevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminForgetDevice",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminForgetDeviceInput
  },
  output: {
    shape: AdminForgetDeviceOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidUserPoolConfigurationException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: UserNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
