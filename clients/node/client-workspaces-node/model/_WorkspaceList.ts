import { List as _List_ } from "@aws-sdk/types";
import { _Workspace } from "./_Workspace";

export const _WorkspaceList: _List_ = {
  type: "list",
  member: {
    shape: _Workspace
  }
};
