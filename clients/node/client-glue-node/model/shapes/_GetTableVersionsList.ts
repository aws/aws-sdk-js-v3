import { List as _List_ } from "@aws-sdk/types";
import { _TableVersion } from "./_TableVersion";

export const _GetTableVersionsList: _List_ = {
  type: "list",
  member: {
    shape: _TableVersion
  }
};
