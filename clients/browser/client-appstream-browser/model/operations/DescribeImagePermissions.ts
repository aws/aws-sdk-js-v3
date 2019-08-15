import { DescribeImagePermissionsInput } from "../shapes/DescribeImagePermissionsInput";
import { DescribeImagePermissionsOutput } from "../shapes/DescribeImagePermissionsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeImagePermissions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeImagePermissions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeImagePermissionsInput
  },
  output: {
    shape: DescribeImagePermissionsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
