import { _ClientVpnConnectionStatus } from "./_ClientVpnConnectionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TerminateConnectionStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConnectionId: {
      shape: {
        type: "string"
      },
      locationName: "connectionId"
    },
    PreviousStatus: {
      shape: _ClientVpnConnectionStatus,
      locationName: "previousStatus"
    },
    CurrentStatus: {
      shape: _ClientVpnConnectionStatus,
      locationName: "currentStatus"
    }
  }
};
