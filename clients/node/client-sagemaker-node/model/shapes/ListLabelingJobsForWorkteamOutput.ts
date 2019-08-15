import { _LabelingJobForWorkteamSummaryList } from "./_LabelingJobForWorkteamSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLabelingJobsForWorkteamOutput: _Structure_ = {
  type: "structure",
  required: ["LabelingJobSummaryList"],
  members: {
    LabelingJobSummaryList: {
      shape: _LabelingJobForWorkteamSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
