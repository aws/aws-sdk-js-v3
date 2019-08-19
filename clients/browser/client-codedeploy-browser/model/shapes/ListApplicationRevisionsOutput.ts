import { _RevisionLocationList } from "./_RevisionLocationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListApplicationRevisionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    revisions: {
      shape: _RevisionLocationList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
