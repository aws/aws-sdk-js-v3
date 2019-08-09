import { List as _List_ } from "@aws-sdk/types";
import { _TargetGroupInfo } from "./_TargetGroupInfo";

export const _TargetGroupInfoList: _List_ = {
  type: "list",
  member: {
    shape: _TargetGroupInfo
  }
};
