import { _Servers } from "./_Servers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RadiusSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RadiusServers: {
      shape: _Servers
    },
    RadiusPort: {
      shape: {
        type: "integer",
        min: 1025
      }
    },
    RadiusTimeout: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    RadiusRetries: {
      shape: {
        type: "integer"
      }
    },
    SharedSecret: {
      shape: {
        type: "string",
        sensitive: true,
        min: 8
      }
    },
    AuthenticationProtocol: {
      shape: {
        type: "string"
      }
    },
    DisplayLabel: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UseSameUsername: {
      shape: {
        type: "boolean"
      }
    }
  }
};
