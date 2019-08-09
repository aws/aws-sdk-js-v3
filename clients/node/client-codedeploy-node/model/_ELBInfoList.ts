import { List as _List_ } from "@aws-sdk/types";
import { _ELBInfo } from "./_ELBInfo";

export const _ELBInfoList: _List_ = {
  type: "list",
  member: {
    shape: _ELBInfo
  }
};
