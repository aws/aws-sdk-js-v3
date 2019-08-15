import { _CancelSpotFleetRequestsError } from "./_CancelSpotFleetRequestsError";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CancelSpotFleetRequestsErrorItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Error: {
      shape: _CancelSpotFleetRequestsError,
      locationName: "error"
    },
    SpotFleetRequestId: {
      shape: {
        type: "string"
      },
      locationName: "spotFleetRequestId"
    }
  }
};
