import { List as _List_ } from "@aws-sdk/types";
import { _UpgradeTarget } from "./_UpgradeTarget";

export const _ValidUpgradeTargetList: _List_ = {
  type: "list",
  member: {
    shape: _UpgradeTarget,
    locationName: "UpgradeTarget"
  }
};
