import { GetDocumentInput } from "./GetDocumentInput";
import { GetDocumentOutput } from "./GetDocumentOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidDocumentVersion } from "./InvalidDocumentVersion";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDocument: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDocument",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDocumentInput
  },
  output: {
    shape: GetDocumentOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidDocument
    },
    {
      shape: InvalidDocumentVersion
    }
  ]
};
