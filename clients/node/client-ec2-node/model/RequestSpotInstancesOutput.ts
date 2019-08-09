import { _SpotInstanceRequestList } from "./_SpotInstanceRequestList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RequestSpotInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SpotInstanceRequests: {
      shape: _SpotInstanceRequestList,
      locationName: "spotInstanceRequestSet"
    }
  }
};
