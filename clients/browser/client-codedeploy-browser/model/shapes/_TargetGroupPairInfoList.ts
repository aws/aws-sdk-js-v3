import { List as _List_ } from "@aws-sdk/types";
import { _TargetGroupPairInfo } from "./_TargetGroupPairInfo";

export const _TargetGroupPairInfoList: _List_ = {
  type: "list",
  member: {
    shape: _TargetGroupPairInfo
  }
};
