import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AgentAlreadyRunningAssessment: _Structure_ = {
  type: "structure",
  required: ["agentId", "assessmentRunArn"],
  members: {
    agentId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    assessmentRunArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
