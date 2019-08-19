import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyVpnConnectionInput: _Structure_ = {
  type: "structure",
  required: ["VpnConnectionId"],
  members: {
    VpnConnectionId: {
      shape: {
        type: "string"
      }
    },
    TransitGatewayId: {
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
      }
    }
  }
};
