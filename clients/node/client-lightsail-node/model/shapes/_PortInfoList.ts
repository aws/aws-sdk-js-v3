import { List as _List_ } from "@aws-sdk/types";
import { _PortInfo } from "./_PortInfo";

export const _PortInfoList: _List_ = {
  type: "list",
  member: {
    shape: _PortInfo
  }
};
