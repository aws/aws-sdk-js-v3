import { UpdateDocumentDefaultVersionInput } from "../shapes/UpdateDocumentDefaultVersionInput";
import { UpdateDocumentDefaultVersionOutput } from "../shapes/UpdateDocumentDefaultVersionOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { InvalidDocumentVersion } from "../shapes/InvalidDocumentVersion";
import { InvalidDocumentSchemaVersion } from "../shapes/InvalidDocumentSchemaVersion";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDocumentDefaultVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDocumentDefaultVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDocumentDefaultVersionInput
  },
  output: {
    shape: UpdateDocumentDefaultVersionOutput
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
    },
    {
      shape: InvalidDocumentSchemaVersion
    }
  ]
};
