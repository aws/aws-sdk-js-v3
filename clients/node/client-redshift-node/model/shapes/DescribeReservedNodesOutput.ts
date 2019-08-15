import { _ReservedNodeList } from "./_ReservedNodeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedNodesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ReservedNodes: {
      shape: _ReservedNodeList
    }
  }
};
