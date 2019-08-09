import { DescribePermissionsInput } from "./DescribePermissionsInput";
import { DescribePermissionsOutput } from "./DescribePermissionsOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
