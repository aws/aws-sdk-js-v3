import { GetDocumentPathInput } from "./GetDocumentPathInput";
import { GetDocumentPathOutput } from "./GetDocumentPathOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDocumentPath: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDocumentPath",
  http: {
    method: "GET",
    requestUri: "/api/v1/documents/{DocumentId}/path"
  },
  input: {
    shape: GetDocumentPathInput
  },
  output: {
    shape: GetDocumentPathOutput
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
    }
  ]
};
