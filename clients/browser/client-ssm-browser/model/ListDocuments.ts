import { ListDocumentsInput } from "./ListDocumentsInput";
import { ListDocumentsOutput } from "./ListDocumentsOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidNextToken } from "./InvalidNextToken";
import { InvalidFilterKey } from "./InvalidFilterKey";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDocuments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDocuments",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDocumentsInput
  },
  output: {
    shape: ListDocumentsOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidNextToken
    },
    {
      shape: InvalidFilterKey
    }
  ]
};
