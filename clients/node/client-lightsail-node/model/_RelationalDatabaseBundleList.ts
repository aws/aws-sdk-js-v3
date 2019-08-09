import { List as _List_ } from "@aws-sdk/types";
import { _RelationalDatabaseBundle } from "./_RelationalDatabaseBundle";

export const _RelationalDatabaseBundleList: _List_ = {
  type: "list",
  member: {
    shape: _RelationalDatabaseBundle
  }
};
