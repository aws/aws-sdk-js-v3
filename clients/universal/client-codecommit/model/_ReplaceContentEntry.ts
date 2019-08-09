import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplaceContentEntry: _Structure_ = {
  type: "structure",
  required: ["filePath", "replacementType"],
  members: {
    filePath: {
      shape: {
        type: "string"
      }
    },
    replacementType: {
      shape: {
        type: "string"
      }
    },
    content: {
      shape: {
        type: "blob"
      }
    },
    fileMode: {
      shape: {
        type: "string"
      }
    }
  }
};
