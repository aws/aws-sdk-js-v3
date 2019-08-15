import { List as _List_ } from "@aws-sdk/types";
import { _DBSecurityGroupMembership } from "./_DBSecurityGroupMembership";

export const _DBSecurityGroupMembershipList: _List_ = {
  type: "list",
  member: {
    shape: _DBSecurityGroupMembership,
    locationName: "DBSecurityGroup"
  }
};
