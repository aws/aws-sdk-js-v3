import { _CancelSpotFleetRequestsSuccessSet } from "./_CancelSpotFleetRequestsSuccessSet";
import { _CancelSpotFleetRequestsErrorSet } from "./_CancelSpotFleetRequestsErrorSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelSpotFleetRequestsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SuccessfulFleetRequests: {
      shape: _CancelSpotFleetRequestsSuccessSet,
      locationName: "successfulFleetRequestSet"
    },
    UnsuccessfulFleetRequests: {
      shape: _CancelSpotFleetRequestsErrorSet,
      locationName: "unsuccessfulFleetRequestSet"
    }
  }
};
