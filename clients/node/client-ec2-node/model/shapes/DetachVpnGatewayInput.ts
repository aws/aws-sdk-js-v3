import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachVpnGatewayInput: _Structure_ = {
  type: "structure",
  required: ["VpcId", "VpnGatewayId"],
  members: {
    VpcId: {
      shape: {
        type: "string"
      }
    },
    VpnGatewayId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
