import { _ConnectionList } from "./_ConnectionList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLagOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    connectionsBandwidth: {
      shape: {
        type: "string"
      }
    },
    numberOfConnections: {
      shape: {
        type: "integer"
      }
    },
    lagId: {
      shape: {
        type: "string"
      }
    },
    ownerAccount: {
      shape: {
        type: "string"
      }
    },
    lagName: {
      shape: {
        type: "string"
      }
    },
    lagState: {
      shape: {
        type: "string"
      }
    },
    location: {
      shape: {
        type: "string"
      }
    },
    region: {
      shape: {
        type: "string"
      }
    },
    minimumLinks: {
      shape: {
        type: "integer"
      }
    },
    awsDevice: {
      shape: {
        type: "string"
      }
    },
    awsDeviceV2: {
      shape: {
        type: "string"
      }
    },
    connections: {
      shape: _ConnectionList
    },
    allowsHostedConnections: {
      shape: {
        type: "boolean"
      }
    },
    jumboFrameCapable: {
      shape: {
        type: "boolean"
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
