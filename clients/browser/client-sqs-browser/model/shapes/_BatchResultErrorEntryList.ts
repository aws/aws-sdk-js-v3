import { List as _List_ } from "@aws-sdk/types";
import { _BatchResultErrorEntry } from "./_BatchResultErrorEntry";

export const _BatchResultErrorEntryList: _List_ = {
  type: "list",
  flattened: true,
  member: {
    shape: _BatchResultErrorEntry,
    locationName: "BatchResultErrorEntry"
  }
};
