import { AdminGetDeviceInput } from "../shapes/AdminGetDeviceInput";
import { AdminGetDeviceOutput } from "../shapes/AdminGetDeviceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidUserPoolConfigurationException } from "../shapes/InvalidUserPoolConfigurationException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
