import { List as _List_ } from "@aws-sdk/types";
import { _CacheSecurityGroupMembership } from "./_CacheSecurityGroupMembership";

export const _CacheSecurityGroupMembershipList: _List_ = {
  type: "list",
  member: {
    shape: _CacheSecurityGroupMembership,
    locationName: "CacheSecurityGroup"
  }
};
