import { DescribeApplicationInput } from "./DescribeApplicationInput";
import { DescribeApplicationOutput } from "./DescribeApplicationOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeApplicationInput
  },
  output: {
    shape: DescribeApplicationOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
