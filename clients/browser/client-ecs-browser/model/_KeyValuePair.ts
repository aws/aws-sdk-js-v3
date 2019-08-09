import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KeyValuePair: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: {
        type: "string"
      }
    }
  }
};
