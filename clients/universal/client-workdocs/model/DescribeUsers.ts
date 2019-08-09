import { DescribeUsersInput } from "./DescribeUsersInput";
import { DescribeUsersOutput } from "./DescribeUsersOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { RequestedEntityTooLargeException } from "./RequestedEntityTooLargeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
