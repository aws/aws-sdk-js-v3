import { _PutPartnerEventsRequestEntryList } from "./_PutPartnerEventsRequestEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutPartnerEventsInput: _Structure_ = {
  type: "structure",
  required: ["Entries"],
  members: {
    Entries: {
      shape: _PutPartnerEventsRequestEntryList
    }
  }
};
