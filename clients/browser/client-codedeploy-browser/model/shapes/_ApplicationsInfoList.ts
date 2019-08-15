import { List as _List_ } from "@aws-sdk/types";
import { _ApplicationInfo } from "./_ApplicationInfo";

export const _ApplicationsInfoList: _List_ = {
  type: "list",
  member: {
    shape: _ApplicationInfo
  }
};
