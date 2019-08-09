import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTrafficMirrorSessionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorSessionId: {
      shape: {
        type: "string"
      },
      locationName: "trafficMirrorSessionId"
    }
  }
};
