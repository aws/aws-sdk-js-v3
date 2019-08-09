import { List as _List_ } from "@aws-sdk/types";
import { _EnvironmentMember } from "./_EnvironmentMember";

export const _EnvironmentMembersList: _List_ = {
  type: "list",
  member: {
    shape: _EnvironmentMember
  }
};
