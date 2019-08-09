import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpnConnectionRouteInput: _Structure_ = {
  type: "structure",
  required: ["DestinationCidrBlock", "VpnConnectionId"],
  members: {
    DestinationCidrBlock: {
      shape: {
        type: "string"
      }
    },
    VpnConnectionId: {
      shape: {
        type: "string"
      }
    }
  }
};
