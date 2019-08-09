import { List as _List_ } from "@aws-sdk/types";
import { _DomainMembership } from "./_DomainMembership";

export const _DomainMembershipList: _List_ = {
  type: "list",
  member: {
    shape: _DomainMembership,
    locationName: "DomainMembership"
  }
};
