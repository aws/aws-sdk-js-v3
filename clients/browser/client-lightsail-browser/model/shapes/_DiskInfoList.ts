import { List as _List_ } from "@aws-sdk/types";
import { _DiskInfo } from "./_DiskInfo";

export const _DiskInfoList: _List_ = {
  type: "list",
  member: {
    shape: _DiskInfo
  }
};
