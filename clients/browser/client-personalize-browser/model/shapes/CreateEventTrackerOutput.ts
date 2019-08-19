import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateEventTrackerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    eventTrackerArn: {
      shape: {
        type: "string"
      }
    },
    trackingId: {
      shape: {
        type: "string"
      }
    }
  }
};
