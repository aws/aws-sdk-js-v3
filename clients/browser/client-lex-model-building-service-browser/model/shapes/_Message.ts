import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Message: _Structure_ = {
  type: "structure",
  required: ["contentType", "content"],
  members: {
    contentType: {
      shape: {
        type: "string"
      }
    },
    content: {
      shape: {
        type: "string",
        min: 1
      }
    },
    groupNumber: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
