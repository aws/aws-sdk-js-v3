import { _DBClusterBacktrackList } from "./_DBClusterBacktrackList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBClusterBacktracksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    DBClusterBacktracks: {
      shape: _DBClusterBacktrackList
    }
  }
};
