import { _RelationalDatabaseEventList } from "./_RelationalDatabaseEventList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRelationalDatabaseEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    relationalDatabaseEvents: {
      shape: _RelationalDatabaseEventList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
