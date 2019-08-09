import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomerAgentInfo: _Structure_ = {
  type: "structure",
  required: [
    "activeAgents",
    "healthyAgents",
    "blackListedAgents",
    "shutdownAgents",
    "unhealthyAgents",
    "totalAgents",
    "unknownAgents"
  ],
  members: {
    activeAgents: {
      shape: {
        type: "integer"
      }
    },
    healthyAgents: {
      shape: {
        type: "integer"
      }
    },
    blackListedAgents: {
      shape: {
        type: "integer"
      }
    },
    shutdownAgents: {
      shape: {
        type: "integer"
      }
    },
    unhealthyAgents: {
      shape: {
        type: "integer"
      }
    },
    totalAgents: {
      shape: {
        type: "integer"
      }
    },
    unknownAgents: {
      shape: {
        type: "integer"
      }
    }
  }
};
