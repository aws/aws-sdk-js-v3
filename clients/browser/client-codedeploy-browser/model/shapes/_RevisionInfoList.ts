import { List as _List_ } from "@aws-sdk/types";
import { _RevisionInfo } from "./_RevisionInfo";

export const _RevisionInfoList: _List_ = {
  type: "list",
  member: {
    shape: _RevisionInfo
  }
};
