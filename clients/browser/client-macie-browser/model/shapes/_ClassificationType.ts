import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClassificationType: _Structure_ = {
  type: "structure",
  required: ["oneTime", "continuous"],
  members: {
    oneTime: {
      shape: {
        type: "string"
      }
    },
    continuous: {
      shape: {
        type: "string"
      }
    }
  }
};
