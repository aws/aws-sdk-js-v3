import { List as _List_ } from "@aws-sdk/types";
import { _NFSFileShareInfo } from "./_NFSFileShareInfo";

export const _NFSFileShareInfoList: _List_ = {
  type: "list",
  member: {
    shape: _NFSFileShareInfo
  }
};
