import { UpdateDevicePolicyConfigurationInput } from "../shapes/UpdateDevicePolicyConfigurationInput";
import { UpdateDevicePolicyConfigurationOutput } from "../shapes/UpdateDevicePolicyConfigurationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
