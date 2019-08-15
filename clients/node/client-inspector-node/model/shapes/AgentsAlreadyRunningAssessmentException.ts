import { _AgentAlreadyRunningAssessmentList } from "./_AgentAlreadyRunningAssessmentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AgentsAlreadyRunningAssessmentException: _Structure_ = {
  type: "structure",
  required: ["message", "agents", "agentsTruncated", "canRetry"],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    agents: {
      shape: _AgentAlreadyRunningAssessmentList
    },
    agentsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    canRetry: {
      shape: {
        type: "boolean"
      }
    }
  },
  exceptionType: "AgentsAlreadyRunningAssessmentException"
};
