import { _RelationalDatabaseSnapshotList } from "./_RelationalDatabaseSnapshotList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRelationalDatabaseSnapshotsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    relationalDatabaseSnapshots: {
      shape: _RelationalDatabaseSnapshotList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
