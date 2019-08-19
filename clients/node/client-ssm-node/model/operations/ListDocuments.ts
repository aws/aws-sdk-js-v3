import { ListDocumentsInput } from "../shapes/ListDocumentsInput";
import { ListDocumentsOutput } from "../shapes/ListDocumentsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { InvalidFilterKey } from "../shapes/InvalidFilterKey";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
