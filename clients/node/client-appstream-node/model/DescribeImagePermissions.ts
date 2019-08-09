import { DescribeImagePermissionsInput } from "./DescribeImagePermissionsInput";
import { DescribeImagePermissionsOutput } from "./DescribeImagePermissionsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
