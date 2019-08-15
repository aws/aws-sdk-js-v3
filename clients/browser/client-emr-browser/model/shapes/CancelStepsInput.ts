import { _StepIdsList } from "./_StepIdsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelStepsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    StepIds: {
      shape: _StepIdsList
    }
  }
};
