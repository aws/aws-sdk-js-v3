import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedNodesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedNodeId: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
