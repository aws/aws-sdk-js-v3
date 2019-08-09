import { List as _List_ } from "@aws-sdk/types";
import { _AuthInfo } from "./_AuthInfo";

export const _AuthInfos: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _AuthInfo
  }
};
