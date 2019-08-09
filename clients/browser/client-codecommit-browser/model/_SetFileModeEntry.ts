import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SetFileModeEntry: _Structure_ = {
  type: "structure",
  required: ["filePath", "fileMode"],
  members: {
    filePath: {
      shape: {
        type: "string"
      }
    },
    fileMode: {
      shape: {
        type: "string"
      }
    }
  }
};
