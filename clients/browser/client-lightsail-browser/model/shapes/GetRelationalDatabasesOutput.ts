import { _RelationalDatabaseList } from "./_RelationalDatabaseList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRelationalDatabasesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    relationalDatabases: {
      shape: _RelationalDatabaseList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
