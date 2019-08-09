import { List as _List_ } from "@aws-sdk/types";
import { _UpgradeStepItem } from "./_UpgradeStepItem";

export const _UpgradeStepsList: _List_ = {
  type: "list",
  member: {
    shape: _UpgradeStepItem
  }
};
