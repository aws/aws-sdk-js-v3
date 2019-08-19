import { DescribeDocumentVersionsInput } from "../shapes/DescribeDocumentVersionsInput";
import { DescribeDocumentVersionsOutput } from "../shapes/DescribeDocumentVersionsOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
