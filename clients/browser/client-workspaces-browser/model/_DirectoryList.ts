import { List as _List_ } from "@aws-sdk/types";
import { _WorkspaceDirectory } from "./_WorkspaceDirectory";

export const _DirectoryList: _List_ = {
  type: "list",
  member: {
    shape: _WorkspaceDirectory
  }
};
