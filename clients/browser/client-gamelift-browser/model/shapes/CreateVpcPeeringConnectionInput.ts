import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpcPeeringConnectionInput: _Structure_ = {
  type: "structure",
  required: ["FleetId", "PeerVpcAwsAccountId", "PeerVpcId"],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    PeerVpcAwsAccountId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PeerVpcId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
