import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetAddress: _Structure_ = {
  type: "structure",
  required: ["Ip"],
  members: {
    Ip: {
      shape: {
        type: "string",
        min: 7
      }
    },
    Port: {
      shape: {
        type: "integer"
      }
    }
  }
};
