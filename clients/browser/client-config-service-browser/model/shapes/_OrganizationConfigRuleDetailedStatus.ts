import { List as _List_ } from "@aws-sdk/types";
import { _MemberAccountStatus } from "./_MemberAccountStatus";

export const _OrganizationConfigRuleDetailedStatus: _List_ = {
  type: "list",
  member: {
    shape: _MemberAccountStatus
  }
};
