import { AdminListDevicesInput } from "../shapes/AdminListDevicesInput";
import { AdminListDevicesOutput } from "../shapes/AdminListDevicesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidUserPoolConfigurationException } from "../shapes/InvalidUserPoolConfigurationException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminListDevices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminListDevices",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminListDevicesInput
  },
  output: {
    shape: AdminListDevicesOutput
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
      shape: InternalErrorException
    },
    {
      shape: NotAuthorizedException
    }
  ]
};
