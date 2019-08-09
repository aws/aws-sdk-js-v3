import { CreateDocumentInput } from "./CreateDocumentInput";
import { CreateDocumentOutput } from "./CreateDocumentOutput";
import { DocumentAlreadyExists } from "./DocumentAlreadyExists";
import { MaxDocumentSizeExceeded } from "./MaxDocumentSizeExceeded";
import { InternalServerError } from "./InternalServerError";
import { InvalidDocumentContent } from "./InvalidDocumentContent";
import { DocumentLimitExceeded } from "./DocumentLimitExceeded";
import { InvalidDocumentSchemaVersion } from "./InvalidDocumentSchemaVersion";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDocument: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDocument",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDocumentInput
  },
  output: {
    shape: CreateDocumentOutput
  },
  errors: [
    {
      shape: DocumentAlreadyExists
    },
    {
      shape: MaxDocumentSizeExceeded
    },
    {
      shape: InternalServerError
    },
    {
      shape: InvalidDocumentContent
    },
    {
      shape: DocumentLimitExceeded
    },
    {
      shape: InvalidDocumentSchemaVersion
    }
  ]
};
