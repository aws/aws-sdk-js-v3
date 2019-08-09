import { _TrafficMirrorFilter } from "./_TrafficMirrorFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyTrafficMirrorFilterNetworkServicesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorFilter: {
      shape: _TrafficMirrorFilter,
      locationName: "trafficMirrorFilter"
    }
  }
};
