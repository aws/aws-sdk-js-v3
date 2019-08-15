import { GetDocumentPathInput } from "../shapes/GetDocumentPathInput";
import { GetDocumentPathOutput } from "../shapes/GetDocumentPathOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
