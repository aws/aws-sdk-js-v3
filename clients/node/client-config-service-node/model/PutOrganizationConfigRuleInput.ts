import { _OrganizationManagedRuleMetadata } from "./_OrganizationManagedRuleMetadata";
import { _OrganizationCustomRuleMetadata } from "./_OrganizationCustomRuleMetadata";
import { _ExcludedAccounts } from "./_ExcludedAccounts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutOrganizationConfigRuleInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationConfigRuleName"],
  members: {
    OrganizationConfigRuleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OrganizationManagedRuleMetadata: {
      shape: _OrganizationManagedRuleMetadata
    },
    OrganizationCustomRuleMetadata: {
      shape: _OrganizationCustomRuleMetadata
    },
    ExcludedAccounts: {
      shape: _ExcludedAccounts
    }
  }
};
