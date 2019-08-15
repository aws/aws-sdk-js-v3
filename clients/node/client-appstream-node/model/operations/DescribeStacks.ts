import { DescribeStacksInput } from "../shapes/DescribeStacksInput";
import { DescribeStacksOutput } from "../shapes/DescribeStacksOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStacks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStacks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStacksInput
  },
  output: {
    shape: DescribeStacksOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
