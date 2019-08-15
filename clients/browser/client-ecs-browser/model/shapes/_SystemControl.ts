import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SystemControl: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    namespace: {
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
