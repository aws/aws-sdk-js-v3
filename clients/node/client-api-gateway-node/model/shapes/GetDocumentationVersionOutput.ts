import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDocumentationVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    version: {
      shape: {
        type: "string"
      }
    },
    createdDate: {
      shape: {
        type: "timestamp"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    }
  }
};
