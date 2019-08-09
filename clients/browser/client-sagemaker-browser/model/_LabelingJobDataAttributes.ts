import { _ContentClassifiers } from "./_ContentClassifiers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LabelingJobDataAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ContentClassifiers: {
      shape: _ContentClassifiers
    }
  }
};
