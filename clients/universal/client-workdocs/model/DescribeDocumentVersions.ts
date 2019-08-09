import { DescribeDocumentVersionsInput } from "./DescribeDocumentVersionsInput";
import { DescribeDocumentVersionsOutput } from "./DescribeDocumentVersionsOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDocumentVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDocumentVersions",
  http: {
    method: "GET",
    requestUri: "/api/v1/documents/{DocumentId}/versions"
  },
  input: {
    shape: DescribeDocumentVersionsInput
  },
  output: {
    shape: DescribeDocumentVersionsOutput
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
      shape: InvalidArgumentException
    },
    {
      shape: FailedDependencyException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ProhibitedStateException
    }
  ]
};
