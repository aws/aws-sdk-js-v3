import { GetDocumentInput } from "./GetDocumentInput";
import { GetDocumentOutput } from "./GetDocumentOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDocument: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDocument",
  http: {
    method: "GET",
    requestUri: "/api/v1/documents/{DocumentId}"
  },
  input: {
    shape: GetDocumentInput
  },
  output: {
    shape: GetDocumentOutput
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
      shape: InvalidPasswordException
    }
  ]
};
