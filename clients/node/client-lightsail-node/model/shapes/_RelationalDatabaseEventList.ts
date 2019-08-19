import { List as _List_ } from "@aws-sdk/types";
import { _RelationalDatabaseEvent } from "./_RelationalDatabaseEvent";

export const _RelationalDatabaseEventList: _List_ = {
  type: "list",
  member: {
    shape: _RelationalDatabaseEvent
  }
};
