import { GetDocumentInput } from "../shapes/GetDocumentInput";
import { GetDocumentOutput } from "../shapes/GetDocumentOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InvalidPasswordException } from "../shapes/InvalidPasswordException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
