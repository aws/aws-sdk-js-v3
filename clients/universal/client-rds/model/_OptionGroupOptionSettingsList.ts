import { List as _List_ } from "@aws-sdk/types";
import { _OptionGroupOptionSetting } from "./_OptionGroupOptionSetting";

export const _OptionGroupOptionSettingsList: _List_ = {
  type: "list",
  member: {
    shape: _OptionGroupOptionSetting,
    locationName: "OptionGroupOptionSetting"
  }
};
