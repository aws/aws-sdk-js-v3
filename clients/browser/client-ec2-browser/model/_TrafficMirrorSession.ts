import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrafficMirrorSession: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorSessionId: {
      shape: {
        type: "string"
      },
      locationName: "trafficMirrorSessionId"
    },
    TrafficMirrorTargetId: {
      shape: {
        type: "string"
      },
      locationName: "trafficMirrorTargetId"
    },
    TrafficMirrorFilterId: {
      shape: {
        type: "string"
      },
      locationName: "trafficMirrorFilterId"
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    },
    PacketLength: {
      shape: {
        type: "integer"
      },
      locationName: "packetLength"
    },
    SessionNumber: {
      shape: {
        type: "integer"
      },
      locationName: "sessionNumber"
    },
    VirtualNetworkId: {
      shape: {
        type: "integer"
      },
      locationName: "virtualNetworkId"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
