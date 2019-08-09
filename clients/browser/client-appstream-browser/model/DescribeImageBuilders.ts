import { DescribeImageBuildersInput } from "./DescribeImageBuildersInput";
import { DescribeImageBuildersOutput } from "./DescribeImageBuildersOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeImageBuilders: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeImageBuilders",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeImageBuildersInput
  },
  output: {
    shape: DescribeImageBuildersOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
