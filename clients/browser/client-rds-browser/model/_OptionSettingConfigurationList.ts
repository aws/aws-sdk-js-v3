import { List as _List_ } from "@aws-sdk/types";
import { _OptionSetting } from "./_OptionSetting";

export const _OptionSettingConfigurationList: _List_ = {
  type: "list",
  member: {
    shape: _OptionSetting,
    locationName: "OptionSetting"
  }
};
