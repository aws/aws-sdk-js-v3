import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteVpnGatewayInput: _Structure_ = {
  type: "structure",
  required: ["VpnGatewayId"],
  members: {
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
