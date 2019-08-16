import { DescribeStreamConsumerInput } from "../shapes/DescribeStreamConsumerInput";
import { DescribeStreamConsumerOutput } from "../shapes/DescribeStreamConsumerOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStreamConsumer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStreamConsumer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStreamConsumerInput
  },
  output: {
    shape: DescribeStreamConsumerOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArgumentException
    }
  ]
};
