import { DescribeDevicePolicyConfigurationInput } from "./DescribeDevicePolicyConfigurationInput";
import { DescribeDevicePolicyConfigurationOutput } from "./DescribeDevicePolicyConfigurationOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
