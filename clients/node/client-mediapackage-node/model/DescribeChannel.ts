import { DescribeChannelInput } from "./DescribeChannelInput";
import { DescribeChannelOutput } from "./DescribeChannelOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
