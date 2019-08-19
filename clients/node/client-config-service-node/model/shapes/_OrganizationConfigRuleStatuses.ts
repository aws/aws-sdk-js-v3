import { List as _List_ } from "@aws-sdk/types";
import { _OrganizationConfigRuleStatus } from "./_OrganizationConfigRuleStatus";

export const _OrganizationConfigRuleStatuses: _List_ = {
  type: "list",
  member: {
    shape: _OrganizationConfigRuleStatus
  }
};
