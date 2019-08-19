import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTrafficMirrorFilterOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorFilterId: {
      shape: {
        type: "string"
      },
      locationName: "trafficMirrorFilterId"
    }
  }
};
