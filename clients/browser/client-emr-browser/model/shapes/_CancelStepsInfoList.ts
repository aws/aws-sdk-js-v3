import { List as _List_ } from "@aws-sdk/types";
import { _CancelStepsInfo } from "./_CancelStepsInfo";

export const _CancelStepsInfoList: _List_ = {
  type: "list",
  member: {
    shape: _CancelStepsInfo
  }
};
