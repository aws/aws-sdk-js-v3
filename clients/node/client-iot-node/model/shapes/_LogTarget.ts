import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LogTarget: _Structure_ = {
  type: "structure",
  required: ["targetType"],
  members: {
    targetType: {
      shape: {
        type: "string"
      }
    },
    targetName: {
      shape: {
        type: "string"
      }
    }
  }
};
