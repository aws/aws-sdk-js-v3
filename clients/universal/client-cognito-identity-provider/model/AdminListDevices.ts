import { AdminListDevicesInput } from "./AdminListDevicesInput";
import { AdminListDevicesOutput } from "./AdminListDevicesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
