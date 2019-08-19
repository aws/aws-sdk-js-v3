import { DescribePermissionsInput } from "../shapes/DescribePermissionsInput";
import { DescribePermissionsOutput } from "../shapes/DescribePermissionsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePermissions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePermissions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePermissionsInput
  },
  output: {
    shape: DescribePermissionsOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
