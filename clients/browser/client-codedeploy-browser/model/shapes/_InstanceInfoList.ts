import { List as _List_ } from "@aws-sdk/types";
import { _InstanceInfo } from "./_InstanceInfo";

export const _InstanceInfoList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceInfo
  }
};
