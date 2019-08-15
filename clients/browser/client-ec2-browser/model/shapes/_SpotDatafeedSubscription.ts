import { _SpotInstanceStateFault } from "./_SpotInstanceStateFault";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SpotDatafeedSubscription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Bucket: {
      shape: {
        type: "string"
      },
      locationName: "bucket"
    },
    Fault: {
      shape: _SpotInstanceStateFault,
      locationName: "fault"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    },
    Prefix: {
      shape: {
        type: "string"
      },
      locationName: "prefix"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    }
  }
};
