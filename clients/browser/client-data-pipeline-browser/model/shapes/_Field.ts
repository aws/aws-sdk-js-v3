import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Field: _Structure_ = {
  type: "structure",
  required: ["key"],
  members: {
    key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    stringValue: {
      shape: {
        type: "string"
      }
    },
    refValue: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
