import { _RelationalDatabaseBundleList } from "./_RelationalDatabaseBundleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRelationalDatabaseBundlesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    bundles: {
      shape: _RelationalDatabaseBundleList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
