import { Structure as _Structure_ } from "@aws-sdk/types";

export const AllocateConnectionOnInterconnectInput: _Structure_ = {
  type: "structure",
  required: [
    "bandwidth",
    "connectionName",
    "ownerAccount",
    "interconnectId",
    "vlan"
  ],
  members: {
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
    ownerAccount: {
      shape: {
        type: "string"
      }
    },
    interconnectId: {
      shape: {
        type: "string"
      }
    },
    vlan: {
      shape: {
        type: "integer"
      }
    }
  }
};
