import { DescribeDeviceInput } from "./DescribeDeviceInput";
import { DescribeDeviceOutput } from "./DescribeDeviceOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
