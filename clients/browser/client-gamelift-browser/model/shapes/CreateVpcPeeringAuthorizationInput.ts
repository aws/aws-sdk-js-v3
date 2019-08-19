import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpcPeeringAuthorizationInput: _Structure_ = {
  type: "structure",
  required: ["GameLiftAwsAccountId", "PeerVpcId"],
  members: {
    GameLiftAwsAccountId: {
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
