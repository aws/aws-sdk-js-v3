import { UpdateDocumentInput } from "../shapes/UpdateDocumentInput";
import { UpdateDocumentOutput } from "../shapes/UpdateDocumentOutput";
import { MaxDocumentSizeExceeded } from "../shapes/MaxDocumentSizeExceeded";
import { DocumentVersionLimitExceeded } from "../shapes/DocumentVersionLimitExceeded";
import { InternalServerError } from "../shapes/InternalServerError";
import { DuplicateDocumentContent } from "../shapes/DuplicateDocumentContent";
import { DuplicateDocumentVersionName } from "../shapes/DuplicateDocumentVersionName";
import { InvalidDocumentContent } from "../shapes/InvalidDocumentContent";
import { InvalidDocumentVersion } from "../shapes/InvalidDocumentVersion";
import { InvalidDocumentSchemaVersion } from "../shapes/InvalidDocumentSchemaVersion";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { InvalidDocumentOperation } from "../shapes/InvalidDocumentOperation";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
