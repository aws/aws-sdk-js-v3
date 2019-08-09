import { _PutEventsRequestEntryList } from "./_PutEventsRequestEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutEventsInput: _Structure_ = {
  type: "structure",
  required: ["Entries"],
  members: {
    Entries: {
      shape: _PutEventsRequestEntryList
    }
  }
};
