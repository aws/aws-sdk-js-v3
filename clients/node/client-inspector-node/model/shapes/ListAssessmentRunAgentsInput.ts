import { _AgentFilter } from "./_AgentFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssessmentRunAgentsInput: _Structure_ = {
  type: "structure",
  required: ["assessmentRunArn"],
  members: {
    assessmentRunArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    filter: {
      shape: _AgentFilter
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
