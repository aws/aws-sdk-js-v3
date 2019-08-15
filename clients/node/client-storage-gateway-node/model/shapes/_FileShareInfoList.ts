import { List as _List_ } from "@aws-sdk/types";
import { _FileShareInfo } from "./_FileShareInfo";

export const _FileShareInfoList: _List_ = {
  type: "list",
  member: {
    shape: _FileShareInfo
  }
};
