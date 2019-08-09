import { _RemoveTargetsResultEntryList } from "./_RemoveTargetsResultEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveTargetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedEntryCount: {
      shape: {
        type: "integer"
      }
    },
    FailedEntries: {
      shape: _RemoveTargetsResultEntryList
    }
  }
};
