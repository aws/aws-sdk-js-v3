import { CreateDocumentInput } from "../shapes/CreateDocumentInput";
import { CreateDocumentOutput } from "../shapes/CreateDocumentOutput";
import { DocumentAlreadyExists } from "../shapes/DocumentAlreadyExists";
import { MaxDocumentSizeExceeded } from "../shapes/MaxDocumentSizeExceeded";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidDocumentContent } from "../shapes/InvalidDocumentContent";
import { DocumentLimitExceeded } from "../shapes/DocumentLimitExceeded";
import { InvalidDocumentSchemaVersion } from "../shapes/InvalidDocumentSchemaVersion";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
