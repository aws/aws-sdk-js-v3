import { DescribeResourcePermissionsInput } from "./DescribeResourcePermissionsInput";
import { DescribeResourcePermissionsOutput } from "./DescribeResourcePermissionsOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeResourcePermissions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeResourcePermissions",
  http: {
    method: "GET",
    requestUri: "/api/v1/resources/{ResourceId}/permissions"
  },
  input: {
    shape: DescribeResourcePermissionsInput
  },
  output: {
    shape: DescribeResourcePermissionsOutput
  },
  errors: [
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: UnauthorizedResourceAccessException
    },
    {
      shape: FailedDependencyException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
