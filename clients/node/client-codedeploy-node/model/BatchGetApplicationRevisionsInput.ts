import { _RevisionLocationList } from "./_RevisionLocationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetApplicationRevisionsInput: _Structure_ = {
  type: "structure",
  required: ["applicationName", "revisions"],
  members: {
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    revisions: {
      shape: _RevisionLocationList
    }
  }
};
