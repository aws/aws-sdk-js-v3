import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcPeeringAuthorization: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GameLiftAwsAccountId: {
      shape: {
        type: "string",
        min: 1
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
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    ExpirationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
