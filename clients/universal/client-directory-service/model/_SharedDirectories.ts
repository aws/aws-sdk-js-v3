import { List as _List_ } from "@aws-sdk/types";
import { _SharedDirectory } from "./_SharedDirectory";

export const _SharedDirectories: _List_ = {
  type: "list",
  member: {
    shape: _SharedDirectory
  }
};
