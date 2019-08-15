import { _AgentNetworkInfoList } from "./_AgentNetworkInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AgentInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    agentId: {
      shape: {
        type: "string"
      }
    },
    hostName: {
      shape: {
        type: "string"
      }
    },
    agentNetworkInfoList: {
      shape: _AgentNetworkInfoList
    },
    connectorId: {
      shape: {
        type: "string"
      }
    },
    version: {
      shape: {
        type: "string"
      }
    },
    health: {
      shape: {
        type: "string"
      }
    },
    lastHealthPingTime: {
      shape: {
        type: "string"
      }
    },
    collectionStatus: {
      shape: {
        type: "string"
      }
    },
    agentType: {
      shape: {
        type: "string"
      }
    },
    registeredTime: {
      shape: {
        type: "string"
      }
    }
  }
};
