import { _RelationalDatabaseBlueprintList } from "./_RelationalDatabaseBlueprintList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRelationalDatabaseBlueprintsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    blueprints: {
      shape: _RelationalDatabaseBlueprintList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
