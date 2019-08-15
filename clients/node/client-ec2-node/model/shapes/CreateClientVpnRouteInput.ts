import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClientVpnRouteInput: _Structure_ = {
  type: "structure",
  required: [
    "ClientVpnEndpointId",
    "DestinationCidrBlock",
    "TargetVpcSubnetId"
  ],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      }
    },
    DestinationCidrBlock: {
      shape: {
        type: "string"
      }
    },
    TargetVpcSubnetId: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
