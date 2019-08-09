import { DescribeProductAsAdminInput } from "./DescribeProductAsAdminInput";
import { DescribeProductAsAdminOutput } from "./DescribeProductAsAdminOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
