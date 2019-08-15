import { _CancelledSpotInstanceRequestList } from "./_CancelledSpotInstanceRequestList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelSpotInstanceRequestsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CancelledSpotInstanceRequests: {
      shape: _CancelledSpotInstanceRequestList,
      locationName: "spotInstanceRequestSet"
    }
  }
};
