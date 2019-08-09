import { UploadDocumentsInput } from "./UploadDocumentsInput";
import { UploadDocumentsOutput } from "./UploadDocumentsOutput";
import { DocumentServiceException } from "./DocumentServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UploadDocuments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UploadDocuments",
  http: {
    method: "POST",
    requestUri: "/2013-01-01/documents/batch?format=sdk"
  },
  input: {
    shape: UploadDocumentsInput
  },
  output: {
    shape: UploadDocumentsOutput
  },
  errors: [
    {
      shape: DocumentServiceException
    }
  ]
};
