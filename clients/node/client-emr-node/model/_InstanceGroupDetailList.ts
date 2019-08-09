import { List as _List_ } from "@aws-sdk/types";
import { _InstanceGroupDetail } from "./_InstanceGroupDetail";

export const _InstanceGroupDetailList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceGroupDetail
  }
};
