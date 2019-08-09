import { _PutEventsResultEntryList } from "./_PutEventsResultEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedEntryCount: {
      shape: {
        type: "integer"
      }
    },
    Entries: {
      shape: _PutEventsResultEntryList
    }
  }
};
