import { DescribeStreamInput } from "./DescribeStreamInput";
import { DescribeStreamOutput } from "./DescribeStreamOutput";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
