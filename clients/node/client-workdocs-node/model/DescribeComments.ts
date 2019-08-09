import { DescribeCommentsInput } from "./DescribeCommentsInput";
import { DescribeCommentsOutput } from "./DescribeCommentsOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
