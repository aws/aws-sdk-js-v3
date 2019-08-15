import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Output: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OutputKey: {
      shape: {
        type: "string"
      }
    },
    OutputValue: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ExportName: {
      shape: {
        type: "string"
      }
    }
  }
};
