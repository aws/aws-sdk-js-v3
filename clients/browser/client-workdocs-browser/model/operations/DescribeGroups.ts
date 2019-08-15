import { DescribeGroupsInput } from "../shapes/DescribeGroupsInput";
import { DescribeGroupsOutput } from "../shapes/DescribeGroupsOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeGroups",
  http: {
    method: "GET",
    requestUri: "/api/v1/groups"
  },
  input: {
    shape: DescribeGroupsInput
  },
  output: {
    shape: DescribeGroupsOutput
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
