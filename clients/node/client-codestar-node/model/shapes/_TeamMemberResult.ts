import { List as _List_ } from "@aws-sdk/types";
import { _TeamMember } from "./_TeamMember";

export const _TeamMemberResult: _List_ = {
  type: "list",
  member: {
    shape: _TeamMember
  }
};
