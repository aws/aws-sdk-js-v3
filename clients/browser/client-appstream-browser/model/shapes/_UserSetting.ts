import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserSetting: _Structure_ = {
  type: "structure",
  required: ["Action", "Permission"],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    Permission: {
      shape: {
        type: "string"
      }
    }
  }
};
