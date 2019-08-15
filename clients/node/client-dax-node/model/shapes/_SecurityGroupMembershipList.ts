import { List as _List_ } from "@aws-sdk/types";
import { _SecurityGroupMembership } from "./_SecurityGroupMembership";

export const _SecurityGroupMembershipList: _List_ = {
  type: "list",
  member: {
    shape: _SecurityGroupMembership
  }
};
