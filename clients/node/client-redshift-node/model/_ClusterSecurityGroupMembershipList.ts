import { List as _List_ } from "@aws-sdk/types";
import { _ClusterSecurityGroupMembership } from "./_ClusterSecurityGroupMembership";

export const _ClusterSecurityGroupMembershipList: _List_ = {
  type: "list",
  member: {
    shape: _ClusterSecurityGroupMembership,
    locationName: "ClusterSecurityGroup"
  }
};
