import { DescribeLogStreamsInput } from "../shapes/DescribeLogStreamsInput";
import { DescribeLogStreamsOutput } from "../shapes/DescribeLogStreamsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
