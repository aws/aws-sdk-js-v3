import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterTracksInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaintenanceTrackName: {
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
