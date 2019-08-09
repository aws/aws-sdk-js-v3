import { _SystemInstanceSummary } from "./_SystemInstanceSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeploySystemInstanceOutput: _Structure_ = {
  type: "structure",
  required: ["summary"],
  members: {
    summary: {
      shape: _SystemInstanceSummary
    },
    greengrassDeploymentId: {
      shape: {
        type: "string"
      }
    }
  }
};
