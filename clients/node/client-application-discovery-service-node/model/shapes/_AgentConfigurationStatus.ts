import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AgentConfigurationStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    agentId: {
      shape: {
        type: "string"
      }
    },
    operationSucceeded: {
      shape: {
        type: "boolean"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    }
  }
};
