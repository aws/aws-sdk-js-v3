import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CancelledSpotInstanceRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SpotInstanceRequestId: {
      shape: {
        type: "string"
      },
      locationName: "spotInstanceRequestId"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    }
  }
};
