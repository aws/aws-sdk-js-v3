import { List as _List_ } from "@aws-sdk/types";
import { _RelationalDatabase } from "./_RelationalDatabase";

export const _RelationalDatabaseList: _List_ = {
  type: "list",
  member: {
    shape: _RelationalDatabase
  }
};
