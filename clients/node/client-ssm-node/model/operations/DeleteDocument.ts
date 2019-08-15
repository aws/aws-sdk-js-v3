import { DeleteDocumentInput } from "../shapes/DeleteDocumentInput";
import { DeleteDocumentOutput } from "../shapes/DeleteDocumentOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { InvalidDocumentOperation } from "../shapes/InvalidDocumentOperation";
import { AssociatedInstances } from "../shapes/AssociatedInstances";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
