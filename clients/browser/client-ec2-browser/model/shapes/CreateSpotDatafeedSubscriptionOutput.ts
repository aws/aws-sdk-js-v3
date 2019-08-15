import { _SpotDatafeedSubscription } from "./_SpotDatafeedSubscription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSpotDatafeedSubscriptionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SpotDatafeedSubscription: {
      shape: _SpotDatafeedSubscription,
      locationName: "spotDatafeedSubscription"
    }
  }
};
