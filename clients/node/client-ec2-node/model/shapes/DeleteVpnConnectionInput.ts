import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteVpnConnectionInput: _Structure_ = {
  type: "structure",
  required: ["VpnConnectionId"],
  members: {
    VpnConnectionId: {
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
