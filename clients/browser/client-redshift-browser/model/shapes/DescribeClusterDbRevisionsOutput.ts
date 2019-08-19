import { _ClusterDbRevisionsList } from "./_ClusterDbRevisionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterDbRevisionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ClusterDbRevisions: {
      shape: _ClusterDbRevisionsList
    }
  }
};
