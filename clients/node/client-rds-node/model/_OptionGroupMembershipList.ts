import { List as _List_ } from "@aws-sdk/types";
import { _OptionGroupMembership } from "./_OptionGroupMembership";

export const _OptionGroupMembershipList: _List_ = {
  type: "list",
  member: {
    shape: _OptionGroupMembership,
    locationName: "OptionGroupMembership"
  }
};
