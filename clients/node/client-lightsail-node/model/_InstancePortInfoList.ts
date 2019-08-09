import { List as _List_ } from "@aws-sdk/types";
import { _InstancePortInfo } from "./_InstancePortInfo";

export const _InstancePortInfoList: _List_ = {
  type: "list",
  member: {
    shape: _InstancePortInfo
  }
};
