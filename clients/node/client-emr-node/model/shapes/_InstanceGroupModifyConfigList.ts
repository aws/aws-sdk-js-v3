import { List as _List_ } from "@aws-sdk/types";
import { _InstanceGroupModifyConfig } from "./_InstanceGroupModifyConfig";

export const _InstanceGroupModifyConfigList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceGroupModifyConfig
  }
};
