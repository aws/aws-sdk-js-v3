import { List as _List_ } from "@aws-sdk/types";
import { _ServerGroup } from "./_ServerGroup";

export const _ServerGroups: _List_ = {
  type: "list",
  member: {
    shape: _ServerGroup
  }
};
