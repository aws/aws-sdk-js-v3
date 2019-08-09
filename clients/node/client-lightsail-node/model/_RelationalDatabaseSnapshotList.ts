import { List as _List_ } from "@aws-sdk/types";
import { _RelationalDatabaseSnapshot } from "./_RelationalDatabaseSnapshot";

export const _RelationalDatabaseSnapshotList: _List_ = {
  type: "list",
  member: {
    shape: _RelationalDatabaseSnapshot
  }
};
