import { DescribeChannelInput } from "./DescribeChannelInput";
import { DescribeChannelOutput } from "./DescribeChannelOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
