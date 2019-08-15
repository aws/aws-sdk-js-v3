import { DescribeDeviceInput } from "../shapes/DescribeDeviceInput";
import { DescribeDeviceOutput } from "../shapes/DescribeDeviceOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDevice",
  http: {
    method: "POST",
    requestUri: "/describeDevice"
  },
  input: {
    shape: DescribeDeviceInput
  },
  output: {
    shape: DescribeDeviceOutput
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
