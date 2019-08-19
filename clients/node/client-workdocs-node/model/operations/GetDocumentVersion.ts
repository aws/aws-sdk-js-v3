import { GetDocumentVersionInput } from "../shapes/GetDocumentVersionInput";
import { GetDocumentVersionOutput } from "../shapes/GetDocumentVersionOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { InvalidPasswordException } from "../shapes/InvalidPasswordException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDocumentVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDocumentVersion",
  http: {
    method: "GET",
    requestUri: "/api/v1/documents/{DocumentId}/versions/{VersionId}"
  },
  input: {
    shape: GetDocumentVersionInput
  },
  output: {
    shape: GetDocumentVersionOutput
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
      shape: ProhibitedStateException
    },
    {
      shape: InvalidPasswordException
    }
  ]
};
