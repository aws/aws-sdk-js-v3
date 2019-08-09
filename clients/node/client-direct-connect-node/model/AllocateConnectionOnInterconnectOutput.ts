import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AllocateConnectionOnInterconnectOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ownerAccount: {
      shape: {
        type: "string"
      }
    },
    connectionId: {
      shape: {
        type: "string"
      }
    },
    connectionName: {
      shape: {
        type: "string"
      }
    },
    connectionState: {
      shape: {
        type: "string"
      }
    },
    region: {
      shape: {
        type: "string"
      }
    },
    location: {
      shape: {
        type: "string"
      }
    },
    bandwidth: {
      shape: {
        type: "string"
      }
    },
    vlan: {
      shape: {
        type: "integer"
      }
    },
    partnerName: {
      shape: {
        type: "string"
      }
    },
    loaIssueTime: {
      shape: {
        type: "timestamp"
      }
    },
    lagId: {
      shape: {
        type: "string"
      }
    },
    awsDevice: {
      shape: {
        type: "string"
      }
    },
    jumboFrameCapable: {
      shape: {
        type: "boolean"
      }
    },
    awsDeviceV2: {
      shape: {
        type: "string"
      }
    },
    hasLogicalRedundancy: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
