import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AgentListEntry: _Structure_ = {
  type: "structure",
  required: [],
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
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
