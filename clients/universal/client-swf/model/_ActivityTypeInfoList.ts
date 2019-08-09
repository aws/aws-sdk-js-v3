import { List as _List_ } from "@aws-sdk/types";
import { _ActivityTypeInfo } from "./_ActivityTypeInfo";

export const _ActivityTypeInfoList: _List_ = {
  type: "list",
  member: {
    shape: _ActivityTypeInfo
  }
};
