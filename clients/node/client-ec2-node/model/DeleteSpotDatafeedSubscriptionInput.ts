import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSpotDatafeedSubscriptionInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
