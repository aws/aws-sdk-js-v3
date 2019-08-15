import { List as _List_ } from "@aws-sdk/types";
import { _SMBFileShareInfo } from "./_SMBFileShareInfo";

export const _SMBFileShareInfoList: _List_ = {
  type: "list",
  member: {
    shape: _SMBFileShareInfo
  }
};
