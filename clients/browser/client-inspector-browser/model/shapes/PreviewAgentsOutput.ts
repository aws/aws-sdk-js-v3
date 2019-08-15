import { _AgentPreviewList } from "./_AgentPreviewList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PreviewAgentsOutput: _Structure_ = {
  type: "structure",
  required: ["agentPreviews"],
  members: {
    agentPreviews: {
      shape: _AgentPreviewList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
