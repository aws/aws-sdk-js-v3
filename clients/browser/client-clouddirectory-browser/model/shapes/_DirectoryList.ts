import { List as _List_ } from "@aws-sdk/types";
import { _Directory } from "./_Directory";

export const _DirectoryList: _List_ = {
  type: "list",
  member: {
    shape: _Directory
  }
};
