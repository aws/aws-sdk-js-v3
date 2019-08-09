import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeleteFileEntry: _Structure_ = {
  type: "structure",
  required: ["filePath"],
  members: {
    filePath: {
      shape: {
        type: "string"
      }
    }
  }
};
