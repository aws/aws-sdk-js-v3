import { List as _List_ } from "@aws-sdk/types";
import { _DirectoryConfig } from "./_DirectoryConfig";

export const _DirectoryConfigList: _List_ = {
  type: "list",
  member: {
    shape: _DirectoryConfig
  }
};
