import { _ReservedCacheNodeList } from "./_ReservedCacheNodeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedCacheNodesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ReservedCacheNodes: {
      shape: _ReservedCacheNodeList
    }
  }
};
