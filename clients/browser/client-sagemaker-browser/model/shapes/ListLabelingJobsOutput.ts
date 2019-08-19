import { _LabelingJobSummaryList } from "./_LabelingJobSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLabelingJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LabelingJobSummaryList: {
      shape: _LabelingJobSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
