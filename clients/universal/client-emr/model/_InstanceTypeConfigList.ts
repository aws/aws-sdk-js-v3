import { List as _List_ } from "@aws-sdk/types";
import { _InstanceTypeConfig } from "./_InstanceTypeConfig";

export const _InstanceTypeConfigList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceTypeConfig
  }
};
