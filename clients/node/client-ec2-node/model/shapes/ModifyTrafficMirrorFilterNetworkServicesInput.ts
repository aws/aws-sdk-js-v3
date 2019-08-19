import { _TrafficMirrorNetworkServiceList } from "./_TrafficMirrorNetworkServiceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyTrafficMirrorFilterNetworkServicesInput: _Structure_ = {
  type: "structure",
  required: ["TrafficMirrorFilterId"],
  members: {
    TrafficMirrorFilterId: {
      shape: {
        type: "string"
      }
    },
    AddNetworkServices: {
      shape: _TrafficMirrorNetworkServiceList,
      locationName: "AddNetworkService"
    },
    RemoveNetworkServices: {
      shape: _TrafficMirrorNetworkServiceList,
      locationName: "RemoveNetworkService"
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
