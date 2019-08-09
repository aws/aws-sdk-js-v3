import { _TerminateConnectionStatusSet } from "./_TerminateConnectionStatusSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TerminateClientVpnConnectionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      },
      locationName: "clientVpnEndpointId"
    },
    Username: {
      shape: {
        type: "string"
      },
      locationName: "username"
    },
    ConnectionStatuses: {
      shape: _TerminateConnectionStatusSet,
      locationName: "connectionStatuses"
    }
  }
};
