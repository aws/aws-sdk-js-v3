import { _ClusterVersionList } from "./_ClusterVersionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ClusterVersions: {
      shape: _ClusterVersionList
    }
  }
};
