import { List as _List_ } from "@aws-sdk/types";
import { _ResolverRuleAssociation } from "./_ResolverRuleAssociation";

export const _ResolverRuleAssociations: _List_ = {
  type: "list",
  member: {
    shape: _ResolverRuleAssociation
  }
};
