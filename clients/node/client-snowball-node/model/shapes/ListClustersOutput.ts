import { _ClusterListEntryList } from "./_ClusterListEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListClustersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterListEntries: {
      shape: _ClusterListEntryList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
