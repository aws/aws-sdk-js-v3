import { List as _List_ } from "@aws-sdk/types";
import { _ComplianceByConfigRule } from "./_ComplianceByConfigRule";

export const _ComplianceByConfigRules: _List_ = {
  type: "list",
  member: {
    shape: _ComplianceByConfigRule
  }
};
