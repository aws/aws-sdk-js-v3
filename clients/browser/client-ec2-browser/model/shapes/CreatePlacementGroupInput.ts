import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePlacementGroupInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    GroupName: {
      shape: {
        type: "string"
      },
      locationName: "groupName"
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
      }
    }
  }
};
