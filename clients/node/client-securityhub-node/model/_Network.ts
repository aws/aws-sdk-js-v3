import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Network: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Direction: {
      shape: {
        type: "string"
      }
    },
    Protocol: {
      shape: {
        type: "string"
      }
    },
    SourceIpV4: {
      shape: {
        type: "string"
      }
    },
    SourceIpV6: {
      shape: {
        type: "string"
      }
    },
    SourcePort: {
      shape: {
        type: "integer"
      }
    },
    SourceDomain: {
      shape: {
        type: "string"
      }
    },
    SourceMac: {
      shape: {
        type: "string"
      }
    },
    DestinationIpV4: {
      shape: {
        type: "string"
      }
    },
    DestinationIpV6: {
      shape: {
        type: "string"
      }
    },
    DestinationPort: {
      shape: {
        type: "integer"
      }
    },
    DestinationDomain: {
      shape: {
        type: "string"
      }
    }
  }
};
