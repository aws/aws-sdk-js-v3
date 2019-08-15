import { DescribeChannelInput } from "../shapes/DescribeChannelInput";
import { DescribeChannelOutput } from "../shapes/DescribeChannelOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeChannel",
  http: {
    method: "GET",
    requestUri: "/channels/{channelName}"
  },
  input: {
    shape: DescribeChannelInput
  },
  output: {
    shape: DescribeChannelOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ThrottlingException
    }
  ]
};
