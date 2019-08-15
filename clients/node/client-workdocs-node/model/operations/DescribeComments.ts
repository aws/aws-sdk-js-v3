import { DescribeCommentsInput } from "../shapes/DescribeCommentsInput";
import { DescribeCommentsOutput } from "../shapes/DescribeCommentsOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeComments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeComments",
  http: {
    method: "GET",
    requestUri: "/api/v1/documents/{DocumentId}/versions/{VersionId}/comments"
  },
  input: {
    shape: DescribeCommentsInput
  },
  output: {
    shape: DescribeCommentsOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
    },
    {
      shape: ProhibitedStateException
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
    }
  ]
};
