import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CancelSpotFleetRequestsSuccessItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CurrentSpotFleetRequestState: {
      shape: {
        type: "string"
      },
      locationName: "currentSpotFleetRequestState"
    },
    PreviousSpotFleetRequestState: {
      shape: {
        type: "string"
      },
      locationName: "previousSpotFleetRequestState"
    },
    SpotFleetRequestId: {
      shape: {
        type: "string"
      },
      locationName: "spotFleetRequestId"
    }
  }
};
