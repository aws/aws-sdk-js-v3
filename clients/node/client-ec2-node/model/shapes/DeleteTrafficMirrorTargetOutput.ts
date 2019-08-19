import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTrafficMirrorTargetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorTargetId: {
      shape: {
        type: "string"
      },
      locationName: "trafficMirrorTargetId"
    }
  }
};
