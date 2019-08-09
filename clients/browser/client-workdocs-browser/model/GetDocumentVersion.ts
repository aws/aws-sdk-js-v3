import { GetDocumentVersionInput } from "./GetDocumentVersionInput";
import { GetDocumentVersionOutput } from "./GetDocumentVersionOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
