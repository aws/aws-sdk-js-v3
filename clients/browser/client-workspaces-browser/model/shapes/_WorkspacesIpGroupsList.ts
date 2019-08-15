import { List as _List_ } from "@aws-sdk/types";
import { _WorkspacesIpGroup } from "./_WorkspacesIpGroup";

export const _WorkspacesIpGroupsList: _List_ = {
  type: "list",
  member: {
    shape: _WorkspacesIpGroup
  }
};
