import { _BatchUpdateDetectorErrorEntries } from "./_BatchUpdateDetectorErrorEntries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchUpdateDetectorOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    batchUpdateDetectorErrorEntries: {
      shape: _BatchUpdateDetectorErrorEntries
    }
  }
};
