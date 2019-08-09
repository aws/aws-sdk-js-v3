import { List as _List_ } from "@aws-sdk/types";
import { _ComplianceStringFilter } from "./_ComplianceStringFilter";

export const _ComplianceStringFilterList: _List_ = {
  type: "list",
  member: {
    shape: _ComplianceStringFilter
  }
};
