import { DescribeProductAsAdminInput } from "../shapes/DescribeProductAsAdminInput";
import { DescribeProductAsAdminOutput } from "../shapes/DescribeProductAsAdminOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeProductAsAdmin: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProductAsAdmin",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeProductAsAdminInput
  },
  output: {
    shape: DescribeProductAsAdminOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
