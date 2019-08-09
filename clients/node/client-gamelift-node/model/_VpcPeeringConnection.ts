import { _VpcPeeringConnectionStatus } from "./_VpcPeeringConnectionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcPeeringConnection: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    IpV4CidrBlock: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VpcPeeringConnectionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: _VpcPeeringConnectionStatus
    },
    PeerVpcId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GameLiftVpcId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
