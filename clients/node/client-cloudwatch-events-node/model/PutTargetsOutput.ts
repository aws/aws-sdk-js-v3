import { _PutTargetsResultEntryList } from "./_PutTargetsResultEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutTargetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedEntryCount: {
      shape: {
        type: "integer"
      }
    },
    FailedEntries: {
      shape: _PutTargetsResultEntryList
    }
  }
};
