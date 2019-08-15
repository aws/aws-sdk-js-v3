import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CommandFilter: _Structure_ = {
  type: "structure",
  required: ["key", "value"],
  members: {
    key: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
