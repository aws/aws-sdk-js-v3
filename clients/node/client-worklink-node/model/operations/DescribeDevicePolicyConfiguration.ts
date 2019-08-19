import { DescribeDevicePolicyConfigurationInput } from "../shapes/DescribeDevicePolicyConfigurationInput";
import { DescribeDevicePolicyConfigurationOutput } from "../shapes/DescribeDevicePolicyConfigurationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDevicePolicyConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDevicePolicyConfiguration",
  http: {
    method: "POST",
    requestUri: "/describeDevicePolicyConfiguration"
  },
  input: {
    shape: DescribeDevicePolicyConfigurationInput
  },
  output: {
    shape: DescribeDevicePolicyConfigurationOutput
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
