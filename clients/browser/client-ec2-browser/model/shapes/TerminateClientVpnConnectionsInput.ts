import { Structure as _Structure_ } from "@aws-sdk/types";

export const TerminateClientVpnConnectionsInput: _Structure_ = {
  type: "structure",
  required: ["ClientVpnEndpointId"],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      }
    },
    ConnectionId: {
      shape: {
        type: "string"
      }
    },
    Username: {
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
