import { _LocalPortDetails } from "./_LocalPortDetails";
import { _RemoteIpDetails } from "./_RemoteIpDetails";
import { _RemotePortDetails } from "./_RemotePortDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkConnectionAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Blocked: {
      shape: {
        type: "boolean"
      },
      locationName: "blocked"
    },
    ConnectionDirection: {
      shape: {
        type: "string"
      },
      locationName: "connectionDirection"
    },
    LocalPortDetails: {
      shape: _LocalPortDetails,
      locationName: "localPortDetails"
    },
    Protocol: {
      shape: {
        type: "string"
      },
      locationName: "protocol"
    },
    RemoteIpDetails: {
      shape: _RemoteIpDetails,
      locationName: "remoteIpDetails"
    },
    RemotePortDetails: {
      shape: _RemotePortDetails,
      locationName: "remotePortDetails"
    }
  }
};
