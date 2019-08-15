import { DescribeUsersInput } from "../shapes/DescribeUsersInput";
import { DescribeUsersOutput } from "../shapes/DescribeUsersOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { RequestedEntityTooLargeException } from "../shapes/RequestedEntityTooLargeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeUsers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUsers",
  http: {
    method: "GET",
    requestUri: "/api/v1/users"
  },
  input: {
    shape: DescribeUsersInput
  },
  output: {
    shape: DescribeUsersOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
    },
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
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: RequestedEntityTooLargeException
    }
  ]
};
