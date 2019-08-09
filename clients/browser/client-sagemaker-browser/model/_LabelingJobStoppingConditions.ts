import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LabelingJobStoppingConditions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxHumanLabeledObjectCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    MaxPercentageOfInputDatasetLabeled: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
