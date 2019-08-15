import { _TrafficMirrorSessionFieldList } from "./_TrafficMirrorSessionFieldList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyTrafficMirrorSessionInput: _Structure_ = {
  type: "structure",
  required: ["TrafficMirrorSessionId"],
  members: {
    TrafficMirrorSessionId: {
      shape: {
        type: "string"
      }
    },
    TrafficMirrorTargetId: {
      shape: {
        type: "string"
      }
    },
    TrafficMirrorFilterId: {
      shape: {
        type: "string"
      }
    },
    PacketLength: {
      shape: {
        type: "integer"
      }
    },
    SessionNumber: {
      shape: {
        type: "integer"
      }
    },
    VirtualNetworkId: {
      shape: {
        type: "integer"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    RemoveFields: {
      shape: _TrafficMirrorSessionFieldList,
      locationName: "RemoveField"
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
