import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAgentInput: _Structure_ = {
  type: "structure",
  required: ["AgentArn"],
  members: {
    AgentArn: {
      shape: {
        type: "string"
      }
    }
  }
};
