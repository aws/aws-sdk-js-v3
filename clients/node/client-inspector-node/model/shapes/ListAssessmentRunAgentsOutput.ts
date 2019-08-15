import { _AssessmentRunAgentList } from "./_AssessmentRunAgentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssessmentRunAgentsOutput: _Structure_ = {
  type: "structure",
  required: ["assessmentRunAgents"],
  members: {
    assessmentRunAgents: {
      shape: _AssessmentRunAgentList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
