import { _AgentVersions } from "./_AgentVersions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAgentVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AgentVersions: {
      shape: _AgentVersions
    }
  }
};
