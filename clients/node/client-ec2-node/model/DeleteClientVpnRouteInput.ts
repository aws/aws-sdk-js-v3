import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteClientVpnRouteInput: _Structure_ = {
  type: "structure",
  required: ["ClientVpnEndpointId", "DestinationCidrBlock"],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      }
    },
    TargetVpcSubnetId: {
      shape: {
        type: "string"
      }
    },
    DestinationCidrBlock: {
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
