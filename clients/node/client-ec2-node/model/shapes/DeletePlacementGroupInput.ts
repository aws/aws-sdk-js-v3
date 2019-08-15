import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeletePlacementGroupInput: _Structure_ = {
  type: "structure",
  required: ["GroupName"],
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
    }
  }
};
