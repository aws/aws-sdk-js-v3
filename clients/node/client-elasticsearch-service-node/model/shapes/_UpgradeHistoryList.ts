import { List as _List_ } from "@aws-sdk/types";
import { _UpgradeHistory } from "./_UpgradeHistory";

export const _UpgradeHistoryList: _List_ = {
  type: "list",
  member: {
    shape: _UpgradeHistory
  }
};
