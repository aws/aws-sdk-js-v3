import { _TagSpecificationList } from "./_TagSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTrafficMirrorSessionInput: _Structure_ = {
  type: "structure",
  required: [
    "NetworkInterfaceId",
    "TrafficMirrorTargetId",
    "TrafficMirrorFilterId",
    "SessionNumber"
  ],
  members: {
    NetworkInterfaceId: {
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
    TagSpecifications: {
      shape: _TagSpecificationList,
      locationName: "TagSpecification"
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    }
  }
};
