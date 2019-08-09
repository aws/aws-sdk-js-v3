import { _AgentsInfo } from "./_AgentsInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAgentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    agentsInfo: {
      shape: _AgentsInfo
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
