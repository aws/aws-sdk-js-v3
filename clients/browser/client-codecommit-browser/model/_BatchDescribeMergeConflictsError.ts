import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchDescribeMergeConflictsError: _Structure_ = {
  type: "structure",
  required: ["filePath", "exceptionName", "message"],
  members: {
    filePath: {
      shape: {
        type: "string"
      }
    },
    exceptionName: {
      shape: {
        type: "string"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    }
  }
};
