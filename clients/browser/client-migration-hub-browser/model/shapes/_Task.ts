import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Task: _Structure_ = {
  type: "structure",
  required: ["Status"],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusDetail: {
      shape: {
        type: "string"
      }
    },
    ProgressPercent: {
      shape: {
        type: "integer"
      }
    }
  }
};
