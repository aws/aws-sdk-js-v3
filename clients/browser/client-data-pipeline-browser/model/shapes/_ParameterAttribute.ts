import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParameterAttribute: _Structure_ = {
  type: "structure",
  required: ["key", "stringValue"],
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
    }
  }
};
