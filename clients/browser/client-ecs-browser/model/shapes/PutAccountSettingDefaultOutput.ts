import { _Setting } from "./_Setting";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutAccountSettingDefaultOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    setting: {
      shape: _Setting
    }
  }
};
