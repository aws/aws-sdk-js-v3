import { List as _List_ } from "@aws-sdk/types";
import { _TableToReload } from "./_TableToReload";

export const _TableListToReload: _List_ = {
  type: "list",
  member: {
    shape: _TableToReload
  }
};
