import { _ServiceSetting } from "./_ServiceSetting";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResetServiceSettingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceSetting: {
      shape: _ServiceSetting
    }
  }
};
