import { List as _List_ } from "@aws-sdk/types";
import { _ClusterSetting } from "./_ClusterSetting";

export const _ClusterSettings: _List_ = {
  type: "list",
  member: {
    shape: _ClusterSetting
  }
};
