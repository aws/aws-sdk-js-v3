import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResetServiceSettingInput: _Structure_ = {
  type: "structure",
  required: ["SettingId"],
  members: {
    SettingId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
