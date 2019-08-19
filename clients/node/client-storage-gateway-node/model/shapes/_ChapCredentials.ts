import { List as _List_ } from "@aws-sdk/types";
import { _ChapInfo } from "./_ChapInfo";

export const _ChapCredentials: _List_ = {
  type: "list",
  member: {
    shape: _ChapInfo
  }
};
