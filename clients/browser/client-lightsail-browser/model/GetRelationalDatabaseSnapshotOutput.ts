import { _RelationalDatabaseSnapshot } from "./_RelationalDatabaseSnapshot";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRelationalDatabaseSnapshotOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    relationalDatabaseSnapshot: {
      shape: _RelationalDatabaseSnapshot
    }
  }
};
