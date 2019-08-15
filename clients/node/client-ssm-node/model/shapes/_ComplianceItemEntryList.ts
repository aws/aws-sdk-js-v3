import { List as _List_ } from "@aws-sdk/types";
import { _ComplianceItemEntry } from "./_ComplianceItemEntry";

export const _ComplianceItemEntryList: _List_ = {
  type: "list",
  member: {
    shape: _ComplianceItemEntry
  }
};
