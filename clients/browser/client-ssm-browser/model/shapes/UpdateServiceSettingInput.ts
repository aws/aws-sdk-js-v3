import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateServiceSettingInput: _Structure_ = {
  type: "structure",
  required: ["SettingId", "SettingValue"],
  members: {
    SettingId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SettingValue: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
