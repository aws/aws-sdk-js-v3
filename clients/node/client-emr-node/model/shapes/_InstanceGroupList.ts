import { List as _List_ } from "@aws-sdk/types";
import { _InstanceGroup } from "./_InstanceGroup";

export const _InstanceGroupList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceGroup
  }
};
