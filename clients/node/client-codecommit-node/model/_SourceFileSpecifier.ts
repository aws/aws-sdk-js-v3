import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SourceFileSpecifier: _Structure_ = {
  type: "structure",
  required: ["filePath"],
  members: {
    filePath: {
      shape: {
        type: "string"
      }
    },
    isMove: {
      shape: {
        type: "boolean"
      }
    }
  }
};
