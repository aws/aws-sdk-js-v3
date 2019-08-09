import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDocumentInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    VersionName: {
      shape: {
        type: "string"
      }
    },
    DocumentVersion: {
      shape: {
        type: "string"
      }
    },
    DocumentFormat: {
      shape: {
        type: "string"
      }
    }
  }
};
