import { List as _List_ } from "@aws-sdk/types";
import { _IdentityInfo } from "./_IdentityInfo";

export const _IdentityInfoList: _List_ = {
  type: "list",
  member: {
    shape: _IdentityInfo
  }
};
