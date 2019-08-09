import { DeleteDocumentInput } from "./DeleteDocumentInput";
import { DeleteDocumentOutput } from "./DeleteDocumentOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidDocumentOperation } from "./InvalidDocumentOperation";
import { AssociatedInstances } from "./AssociatedInstances";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDocument: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDocument",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDocumentInput
  },
  output: {
    shape: DeleteDocumentOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidDocument
    },
    {
      shape: InvalidDocumentOperation
    },
    {
      shape: AssociatedInstances
    }
  ]
};
