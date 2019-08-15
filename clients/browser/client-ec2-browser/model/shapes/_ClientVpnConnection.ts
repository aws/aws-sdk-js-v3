import { _ClientVpnConnectionStatus } from "./_ClientVpnConnectionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClientVpnConnection: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      },
      locationName: "clientVpnEndpointId"
    },
    Timestamp: {
      shape: {
        type: "string"
      },
      locationName: "timestamp"
    },
    ConnectionId: {
      shape: {
        type: "string"
      },
      locationName: "connectionId"
    },
    Username: {
      shape: {
        type: "string"
      },
      locationName: "username"
    },
    ConnectionEstablishedTime: {
      shape: {
        type: "string"
      },
      locationName: "connectionEstablishedTime"
    },
    IngressBytes: {
      shape: {
        type: "string"
      },
      locationName: "ingressBytes"
    },
    EgressBytes: {
      shape: {
        type: "string"
      },
      locationName: "egressBytes"
    },
    IngressPackets: {
      shape: {
        type: "string"
      },
      locationName: "ingressPackets"
    },
    EgressPackets: {
      shape: {
        type: "string"
      },
      locationName: "egressPackets"
    },
    ClientIp: {
      shape: {
        type: "string"
      },
      locationName: "clientIp"
    },
    CommonName: {
      shape: {
        type: "string"
      },
      locationName: "commonName"
    },
    Status: {
      shape: _ClientVpnConnectionStatus,
      locationName: "status"
    },
    ConnectionEndTime: {
      shape: {
        type: "string"
      },
      locationName: "connectionEndTime"
    }
  }
};
