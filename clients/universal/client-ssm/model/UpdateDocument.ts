import { UpdateDocumentInput } from "./UpdateDocumentInput";
import { UpdateDocumentOutput } from "./UpdateDocumentOutput";
import { MaxDocumentSizeExceeded } from "./MaxDocumentSizeExceeded";
import { DocumentVersionLimitExceeded } from "./DocumentVersionLimitExceeded";
import { InternalServerError } from "./InternalServerError";
import { DuplicateDocumentContent } from "./DuplicateDocumentContent";
import { DuplicateDocumentVersionName } from "./DuplicateDocumentVersionName";
import { InvalidDocumentContent } from "./InvalidDocumentContent";
import { InvalidDocumentVersion } from "./InvalidDocumentVersion";
import { InvalidDocumentSchemaVersion } from "./InvalidDocumentSchemaVersion";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidDocumentOperation } from "./InvalidDocumentOperation";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateDocument: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDocument",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDocumentInput
  },
  output: {
    shape: UpdateDocumentOutput
  },
  errors: [
    {
      shape: MaxDocumentSizeExceeded
    },
    {
      shape: DocumentVersionLimitExceeded
    },
    {
      shape: InternalServerError
    },
    {
      shape: DuplicateDocumentContent
    },
    {
      shape: DuplicateDocumentVersionName
    },
    {
      shape: InvalidDocumentContent
    },
    {
      shape: InvalidDocumentVersion
    },
    {
      shape: InvalidDocumentSchemaVersion
    },
    {
      shape: InvalidDocument
    },
    {
      shape: InvalidDocumentOperation
    }
  ]
};
