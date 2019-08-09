import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParameterValue: _Structure_ = {
  type: "structure",
  required: ["id", "stringValue"],
  members: {
    id: {
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
