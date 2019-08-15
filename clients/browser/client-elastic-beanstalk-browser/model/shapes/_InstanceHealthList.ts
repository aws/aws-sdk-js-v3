import { List as _List_ } from "@aws-sdk/types";
import { _SingleInstanceHealth } from "./_SingleInstanceHealth";

export const _InstanceHealthList: _List_ = {
  type: "list",
  member: {
    shape: _SingleInstanceHealth
  }
};
