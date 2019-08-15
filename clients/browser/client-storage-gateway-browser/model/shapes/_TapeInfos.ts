import { List as _List_ } from "@aws-sdk/types";
import { _TapeInfo } from "./_TapeInfo";

export const _TapeInfos: _List_ = {
  type: "list",
  member: {
    shape: _TapeInfo
  }
};
