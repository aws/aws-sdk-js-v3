import { _JobBookmarkEntryList } from "./_JobBookmarkEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetJobBookmarksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobBookmarkEntries: {
      shape: _JobBookmarkEntryList
    },
    NextToken: {
      shape: {
        type: "integer"
      }
    }
  }
};
