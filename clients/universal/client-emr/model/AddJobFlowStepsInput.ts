import { _StepConfigList } from "./_StepConfigList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddJobFlowStepsInput: _Structure_ = {
  type: "structure",
  required: ["JobFlowId", "Steps"],
  members: {
    JobFlowId: {
      shape: {
        type: "string"
      }
    },
    Steps: {
      shape: _StepConfigList
    }
  }
};
