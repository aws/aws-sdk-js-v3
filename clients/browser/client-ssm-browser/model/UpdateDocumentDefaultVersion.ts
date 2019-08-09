import { UpdateDocumentDefaultVersionInput } from "./UpdateDocumentDefaultVersionInput";
import { UpdateDocumentDefaultVersionOutput } from "./UpdateDocumentDefaultVersionOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidDocumentVersion } from "./InvalidDocumentVersion";
import { InvalidDocumentSchemaVersion } from "./InvalidDocumentSchemaVersion";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
