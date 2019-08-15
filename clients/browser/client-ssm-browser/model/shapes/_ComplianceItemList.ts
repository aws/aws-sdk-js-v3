import { List as _List_ } from "@aws-sdk/types";
import { _ComplianceItem } from "./_ComplianceItem";

export const _ComplianceItemList: _List_ = {
  type: "list",
  member: {
    shape: _ComplianceItem
  }
};
