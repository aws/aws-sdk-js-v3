import { List as _List_ } from "@aws-sdk/types";
import { _FileSystem } from "./_FileSystem";

export const _FileSystems: _List_ = {
  type: "list",
  member: {
    shape: _FileSystem
  }
};
