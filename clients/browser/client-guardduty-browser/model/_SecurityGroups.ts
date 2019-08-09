import { List as _List_ } from "@aws-sdk/types";
import { _SecurityGroup } from "./_SecurityGroup";

export const _SecurityGroups: _List_ = {
  type: "list",
  member: {
    shape: _SecurityGroup
  }
};
