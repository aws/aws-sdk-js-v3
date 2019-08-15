import { List as _List_ } from "@aws-sdk/types";
import { _InstanceGroupConfig } from "./_InstanceGroupConfig";

export const _InstanceGroupConfigList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceGroupConfig
  }
};
