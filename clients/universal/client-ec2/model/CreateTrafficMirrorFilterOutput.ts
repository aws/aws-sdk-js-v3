import { _TrafficMirrorFilter } from "./_TrafficMirrorFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTrafficMirrorFilterOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorFilter: {
      shape: _TrafficMirrorFilter,
      locationName: "trafficMirrorFilter"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    }
  }
};
