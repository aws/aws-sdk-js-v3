import { _DatastoreSummaries } from "./_DatastoreSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDatastoresOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    datastoreSummaries: {
      shape: _DatastoreSummaries
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
