import { _JobBookmarkEntry } from "./_JobBookmarkEntry";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetJobBookmarkOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobBookmarkEntry: {
      shape: _JobBookmarkEntry
    }
  }
};
