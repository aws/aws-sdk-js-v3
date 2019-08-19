import { _DatasetEntries } from "./_DatasetEntries";
import { _DatasetContentStatus } from "./_DatasetContentStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDatasetContentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    entries: {
      shape: _DatasetEntries
    },
    timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    status: {
      shape: _DatasetContentStatus
    }
  }
};
