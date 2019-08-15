import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DescribeDBLogFilesDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LogFileName: {
      shape: {
        type: "string"
      }
    },
    LastWritten: {
      shape: {
        type: "integer"
      }
    },
    Size: {
      shape: {
        type: "integer"
      }
    }
  }
};
