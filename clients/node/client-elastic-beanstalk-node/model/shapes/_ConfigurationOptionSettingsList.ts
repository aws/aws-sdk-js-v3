import { List as _List_ } from "@aws-sdk/types";
import { _ConfigurationOptionSetting } from "./_ConfigurationOptionSetting";

export const _ConfigurationOptionSettingsList: _List_ = {
  type: "list",
  member: {
    shape: _ConfigurationOptionSetting
  }
};
