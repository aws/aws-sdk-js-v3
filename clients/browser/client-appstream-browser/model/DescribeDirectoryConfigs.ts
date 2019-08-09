import { DescribeDirectoryConfigsInput } from "./DescribeDirectoryConfigsInput";
import { DescribeDirectoryConfigsOutput } from "./DescribeDirectoryConfigsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDirectoryConfigs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDirectoryConfigs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDirectoryConfigsInput
  },
  output: {
    shape: DescribeDirectoryConfigsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
