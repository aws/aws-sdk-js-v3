import { List as _List_ } from "@aws-sdk/types";
import { _TargetAddress } from "./_TargetAddress";

export const _TargetList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _TargetAddress
  }
};
