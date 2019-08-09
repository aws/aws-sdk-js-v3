import { List as _List_ } from "@aws-sdk/types";
import { _MemberDefinition } from "./_MemberDefinition";

export const _MemberDefinitions: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _MemberDefinition
  }
};
