import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AgentPreview: _Structure_ = {
  type: "structure",
  required: ["agentId"],
  members: {
    hostname: {
      shape: {
        type: "string"
      }
    },
    agentId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    autoScalingGroup: {
      shape: {
        type: "string",
        min: 1
      }
    },
    agentHealth: {
      shape: {
        type: "string"
      }
    },
    agentVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    operatingSystem: {
      shape: {
        type: "string",
        min: 1
      }
    },
    kernelVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ipv4Address: {
      shape: {
        type: "string",
        min: 7
      }
    }
  }
};
