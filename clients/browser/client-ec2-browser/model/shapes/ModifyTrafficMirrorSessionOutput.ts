import { _TrafficMirrorSession } from "./_TrafficMirrorSession";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyTrafficMirrorSessionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorSession: {
      shape: _TrafficMirrorSession,
      locationName: "trafficMirrorSession"
    }
  }
};
