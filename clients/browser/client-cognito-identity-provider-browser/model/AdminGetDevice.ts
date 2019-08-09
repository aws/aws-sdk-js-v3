import { AdminGetDeviceInput } from "./AdminGetDeviceInput";
import { AdminGetDeviceOutput } from "./AdminGetDeviceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AdminGetDevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminGetDevice",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminGetDeviceInput
  },
  output: {
    shape: AdminGetDeviceOutput
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
      shape: InternalErrorException
    },
    {
      shape: NotAuthorizedException
    }
  ]
};
