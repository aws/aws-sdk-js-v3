import { _StepIdsList } from "./_StepIdsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddJobFlowStepsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StepIds: {
      shape: _StepIdsList
    }
  }
};
