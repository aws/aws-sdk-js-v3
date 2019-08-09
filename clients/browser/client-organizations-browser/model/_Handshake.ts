import { _HandshakeParties } from "./_HandshakeParties";
import { _HandshakeResources } from "./_HandshakeResources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Handshake: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    Parties: {
      shape: _HandshakeParties
    },
    State: {
      shape: {
        type: "string"
      }
    },
    RequestedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    ExpirationTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    Action: {
      shape: {
        type: "string"
      }
    },
    Resources: {
      shape: _HandshakeResources
    }
  }
};
