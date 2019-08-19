import { DescribeStreamInput } from "../shapes/DescribeStreamInput";
import { DescribeStreamOutput } from "../shapes/DescribeStreamOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ClientLimitExceededException } from "../shapes/ClientLimitExceededException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStream",
  http: {
    method: "POST",
    requestUri: "/describeStream"
  },
  input: {
    shape: DescribeStreamInput
  },
  output: {
    shape: DescribeStreamOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ClientLimitExceededException
    },
    {
      shape: NotAuthorizedException
    }
  ]
};
