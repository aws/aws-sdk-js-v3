import { _DocumentMetadata } from "./_DocumentMetadata";
import { _UploadMetadata } from "./_UploadMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const InitiateDocumentVersionUploadOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Metadata: {
      shape: _DocumentMetadata
    },
    UploadMetadata: {
      shape: _UploadMetadata
    }
  }
};
