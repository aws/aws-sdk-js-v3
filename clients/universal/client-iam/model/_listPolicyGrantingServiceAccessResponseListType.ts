import { List as _List_ } from "@aws-sdk/types";
import { _ListPoliciesGrantingServiceAccessEntry } from "./_ListPoliciesGrantingServiceAccessEntry";

export const _listPolicyGrantingServiceAccessResponseListType: _List_ = {
  type: "list",
  member: {
    shape: _ListPoliciesGrantingServiceAccessEntry
  }
};
