import { _StepSummaryList } from "./_StepSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStepsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Steps: {
      shape: _StepSummaryList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
