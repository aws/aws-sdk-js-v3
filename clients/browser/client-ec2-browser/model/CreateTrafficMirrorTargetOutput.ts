import { _TrafficMirrorTarget } from "./_TrafficMirrorTarget";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTrafficMirrorTargetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorTarget: {
      shape: _TrafficMirrorTarget,
      locationName: "trafficMirrorTarget"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    }
  }
};
