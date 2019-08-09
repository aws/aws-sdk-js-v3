import { List as _List_ } from "@aws-sdk/types";
import { _VpcSecurityGroupMembership } from "./_VpcSecurityGroupMembership";

export const _VpcSecurityGroupMembershipList: _List_ = {
  type: "list",
  member: {
    shape: _VpcSecurityGroupMembership
  }
};
