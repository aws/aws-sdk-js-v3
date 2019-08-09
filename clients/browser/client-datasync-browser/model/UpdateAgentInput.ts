import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAgentInput: _Structure_ = {
  type: "structure",
  required: ["AgentArn"],
  members: {
    AgentArn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
