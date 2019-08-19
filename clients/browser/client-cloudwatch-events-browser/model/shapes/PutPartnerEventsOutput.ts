import { _PutPartnerEventsResultEntryList } from "./_PutPartnerEventsResultEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutPartnerEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedEntryCount: {
      shape: {
        type: "integer"
      }
    },
    Entries: {
      shape: _PutPartnerEventsResultEntryList
    }
  }
};
