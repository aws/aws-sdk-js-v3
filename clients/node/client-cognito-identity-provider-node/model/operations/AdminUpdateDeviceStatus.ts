import { AdminUpdateDeviceStatusInput } from "../shapes/AdminUpdateDeviceStatusInput";
import { AdminUpdateDeviceStatusOutput } from "../shapes/AdminUpdateDeviceStatusOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidUserPoolConfigurationException } from "../shapes/InvalidUserPoolConfigurationException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
