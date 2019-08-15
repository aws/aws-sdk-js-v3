import { DescribeImageBuildersInput } from "../shapes/DescribeImageBuildersInput";
import { DescribeImageBuildersOutput } from "../shapes/DescribeImageBuildersOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
