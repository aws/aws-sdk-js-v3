import { DescribeGroupsInput } from "./DescribeGroupsInput";
import { DescribeGroupsOutput } from "./DescribeGroupsOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
