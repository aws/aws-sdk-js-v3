import { GetDocumentInput } from "../shapes/GetDocumentInput";
import { GetDocumentOutput } from "../shapes/GetDocumentOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { InvalidDocumentVersion } from "../shapes/InvalidDocumentVersion";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
