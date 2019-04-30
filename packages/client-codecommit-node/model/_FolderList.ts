import { List as _List_ } from "@aws-sdk/types";
import { _Folder } from "./_Folder";

export const _FolderList: _List_ = {
  type: "list",
  member: {
    shape: _Folder
  }
};
