import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AllocateHostedConnectionInput: _Structure_ = {
  type: "structure",
  required: [
    "connectionId",
    "ownerAccount",
    "bandwidth",
    "connectionName",
    "vlan"
  ],
  members: {
    connectionId: {
      shape: {
        type: "string"
      }
    },
    ownerAccount: {
      shape: {
        type: "string"
      }
    },
    bandwidth: {
      shape: {
        type: "string"
      }
    },
    connectionName: {
      shape: {
        type: "string"
      }
    },
    vlan: {
      shape: {
        type: "integer"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
