import { AdminUpdateDeviceStatusInput } from "./AdminUpdateDeviceStatusInput";
import { AdminUpdateDeviceStatusOutput } from "./AdminUpdateDeviceStatusOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AdminUpdateDeviceStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminUpdateDeviceStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminUpdateDeviceStatusInput
  },
  output: {
    shape: AdminUpdateDeviceStatusOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
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
