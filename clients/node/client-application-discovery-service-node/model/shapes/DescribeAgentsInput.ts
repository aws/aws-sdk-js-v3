import { _AgentIds } from "./_AgentIds";
import { _Filters } from "./_Filters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAgentsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    agentIds: {
      shape: _AgentIds
    },
    filters: {
      shape: _Filters
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
