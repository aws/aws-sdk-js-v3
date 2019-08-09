import { UpdateDevicePolicyConfigurationInput } from "./UpdateDevicePolicyConfigurationInput";
import { UpdateDevicePolicyConfigurationOutput } from "./UpdateDevicePolicyConfigurationOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateDevicePolicyConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDevicePolicyConfiguration",
  http: {
    method: "POST",
    requestUri: "/updateDevicePolicyConfiguration"
  },
  input: {
    shape: UpdateDevicePolicyConfigurationInput
  },
  output: {
    shape: UpdateDevicePolicyConfigurationOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
