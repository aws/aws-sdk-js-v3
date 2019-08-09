import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DateInterval: _Structure_ = {
  type: "structure",
  required: ["Start", "End"],
  members: {
    Start: {
      shape: {
        type: "string"
      }
    },
    End: {
      shape: {
        type: "string"
      }
    }
  }
};
