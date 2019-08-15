import { _InstanceSummaryList } from "./_InstanceSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetDeploymentInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    instancesSummary: {
      shape: _InstanceSummaryList
    },
    errorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
