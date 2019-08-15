import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NeighborConnectionDetail: _Structure_ = {
  type: "structure",
  required: ["sourceServerId", "destinationServerId", "connectionsCount"],
  members: {
    sourceServerId: {
      shape: {
        type: "string"
      }
    },
    destinationServerId: {
      shape: {
        type: "string"
      }
    },
    destinationPort: {
      shape: {
        type: "integer"
      }
    },
    transportProtocol: {
      shape: {
        type: "string"
      }
    },
    connectionsCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
