import { AdminForgetDeviceInput } from "../shapes/AdminForgetDeviceInput";
import { AdminForgetDeviceOutput } from "../shapes/AdminForgetDeviceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidUserPoolConfigurationException } from "../shapes/InvalidUserPoolConfigurationException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
