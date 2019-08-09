import { DescribeLogStreamsInput } from "./DescribeLogStreamsInput";
import { DescribeLogStreamsOutput } from "./DescribeLogStreamsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeLogStreams: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLogStreams",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLogStreamsInput
  },
  output: {
    shape: DescribeLogStreamsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
