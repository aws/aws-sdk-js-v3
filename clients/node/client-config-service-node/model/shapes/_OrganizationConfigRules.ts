import { List as _List_ } from "@aws-sdk/types";
import { _OrganizationConfigRule } from "./_OrganizationConfigRule";

export const _OrganizationConfigRules: _List_ = {
  type: "list",
  member: {
    shape: _OrganizationConfigRule
  }
};
