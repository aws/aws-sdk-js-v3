import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlacementGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupName: {
      shape: {
        type: "string"
      },
      locationName: "groupName"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    Strategy: {
      shape: {
        type: "string"
      },
      locationName: "strategy"
    },
    PartitionCount: {
      shape: {
        type: "integer"
      },
      locationName: "partitionCount"
    }
  }
};
