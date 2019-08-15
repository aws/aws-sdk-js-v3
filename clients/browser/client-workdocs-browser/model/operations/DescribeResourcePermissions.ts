import { DescribeResourcePermissionsInput } from "../shapes/DescribeResourcePermissionsInput";
import { DescribeResourcePermissionsOutput } from "../shapes/DescribeResourcePermissionsOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
