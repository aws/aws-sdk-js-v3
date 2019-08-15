import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Listener: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Protocol: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "integer"
      }
    }
  }
};
