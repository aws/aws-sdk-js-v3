import { List as _List_ } from "@aws-sdk/types";
import { _TapeRecoveryPointInfo } from "./_TapeRecoveryPointInfo";

export const _TapeRecoveryPointInfos: _List_ = {
  type: "list",
  member: {
    shape: _TapeRecoveryPointInfo
  }
};
