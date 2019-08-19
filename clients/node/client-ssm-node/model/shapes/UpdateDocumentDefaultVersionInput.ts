import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDocumentDefaultVersionInput: _Structure_ = {
  type: "structure",
  required: ["Name", "DocumentVersion"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    DocumentVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
