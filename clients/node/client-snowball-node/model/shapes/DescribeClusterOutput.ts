import { _ClusterMetadata } from "./_ClusterMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterMetadata: {
      shape: _ClusterMetadata
    }
  }
};
