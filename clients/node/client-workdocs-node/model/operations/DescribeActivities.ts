import { DescribeActivitiesInput } from "../shapes/DescribeActivitiesInput";
import { DescribeActivitiesOutput } from "../shapes/DescribeActivitiesOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
