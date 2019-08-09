import { ListDocumentVersionsInput } from "./ListDocumentVersionsInput";
import { ListDocumentVersionsOutput } from "./ListDocumentVersionsOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidNextToken } from "./InvalidNextToken";
import { InvalidDocument } from "./InvalidDocument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDocumentVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDocumentVersions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDocumentVersionsInput
  },
  output: {
    shape: ListDocumentVersionsOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidNextToken
    },
    {
      shape: InvalidDocument
    }
  ]
};
