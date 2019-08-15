import { UploadDocumentsInput } from "../shapes/UploadDocumentsInput";
import { UploadDocumentsOutput } from "../shapes/UploadDocumentsOutput";
import { DocumentServiceException } from "../shapes/DocumentServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
