import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopLabelingJobInput: _Structure_ = {
  type: "structure",
  required: ["LabelingJobName"],
  members: {
    LabelingJobName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
