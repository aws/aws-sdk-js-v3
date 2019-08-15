import { List as _List_ } from "@aws-sdk/types";
import { _StreamInfo } from "./_StreamInfo";

export const _StreamInfoList: _List_ = {
  type: "list",
  member: {
    shape: _StreamInfo
  }
};
