import { DescribeChannelInput } from "../shapes/DescribeChannelInput";
import { DescribeChannelOutput } from "../shapes/DescribeChannelOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeChannel",
  http: {
    method: "GET",
    requestUri: "/channels/{id}"
  },
  input: {
    shape: DescribeChannelInput
  },
  output: {
    shape: DescribeChannelOutput
  },
  errors: [
    {
      shape: UnprocessableEntityException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
