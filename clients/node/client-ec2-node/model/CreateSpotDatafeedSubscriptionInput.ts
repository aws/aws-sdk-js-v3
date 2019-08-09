import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSpotDatafeedSubscriptionInput: _Structure_ = {
  type: "structure",
  required: ["Bucket"],
  members: {
    Bucket: {
      shape: {
        type: "string"
      },
      locationName: "bucket"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    Prefix: {
      shape: {
        type: "string"
      },
      locationName: "prefix"
    }
  }
};
