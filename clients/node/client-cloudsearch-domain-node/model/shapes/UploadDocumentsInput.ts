import { Structure as _Structure_ } from "@aws-sdk/types";

export const UploadDocumentsInput: _Structure_ = {
  type: "structure",
  required: ["documents", "contentType"],
  members: {
    documents: {
      shape: {
        type: "blob",
        streaming: true
      }
    },
    contentType: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Type"
    }
  },
  payload: "documents"
};
