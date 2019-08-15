import { _JobExecutionSummaryForThingList } from "./_JobExecutionSummaryForThingList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobExecutionsForThingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    executionSummaries: {
      shape: _JobExecutionSummaryForThingList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
