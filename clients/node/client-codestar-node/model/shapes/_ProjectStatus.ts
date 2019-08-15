import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProjectStatus: _Structure_ = {
  type: "structure",
  required: ["state"],
  members: {
    state: {
      shape: {
        type: "string"
      }
    },
    reason: {
      shape: {
        type: "string"
      }
    }
  }
};
