import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomerConnectorInfo: _Structure_ = {
  type: "structure",
  required: [
    "activeConnectors",
    "healthyConnectors",
    "blackListedConnectors",
    "shutdownConnectors",
    "unhealthyConnectors",
    "totalConnectors",
    "unknownConnectors"
  ],
  members: {
    activeConnectors: {
      shape: {
        type: "integer"
      }
    },
    healthyConnectors: {
      shape: {
        type: "integer"
      }
    },
    blackListedConnectors: {
      shape: {
        type: "integer"
      }
    },
    shutdownConnectors: {
      shape: {
        type: "integer"
      }
    },
    unhealthyConnectors: {
      shape: {
        type: "integer"
      }
    },
    totalConnectors: {
      shape: {
        type: "integer"
      }
    },
    unknownConnectors: {
      shape: {
        type: "integer"
      }
    }
  }
};
