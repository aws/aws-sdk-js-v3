import { ListDocumentVersionsInput } from "../shapes/ListDocumentVersionsInput";
import { ListDocumentVersionsOutput } from "../shapes/ListDocumentVersionsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
