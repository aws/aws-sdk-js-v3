import { DescribeActivitiesInput } from "./DescribeActivitiesInput";
import { DescribeActivitiesOutput } from "./DescribeActivitiesOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeActivities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeActivities",
  http: {
    method: "GET",
    requestUri: "/api/v1/activities"
  },
  input: {
    shape: DescribeActivitiesInput
  },
  output: {
    shape: DescribeActivitiesOutput
  },
  errors: [
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: UnauthorizedResourceAccessException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: FailedDependencyException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
