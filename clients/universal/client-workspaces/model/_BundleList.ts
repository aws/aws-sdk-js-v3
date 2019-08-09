import { List as _List_ } from "@aws-sdk/types";
import { _WorkspaceBundle } from "./_WorkspaceBundle";

export const _BundleList: _List_ = {
  type: "list",
  member: {
    shape: _WorkspaceBundle
  }
};
