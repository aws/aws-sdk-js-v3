import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpcPeeringConnectionInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    PeerOwnerId: {
      shape: {
        type: "string"
      },
      locationName: "peerOwnerId"
    },
    PeerVpcId: {
      shape: {
        type: "string"
      },
      locationName: "peerVpcId"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    },
    PeerRegion: {
      shape: {
        type: "string"
      }
    }
  }
};
