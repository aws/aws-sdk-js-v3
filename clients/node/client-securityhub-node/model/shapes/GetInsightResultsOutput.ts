import { _InsightResults } from "./_InsightResults";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInsightResultsOutput: _Structure_ = {
  type: "structure",
  required: ["InsightResults"],
  members: {
    InsightResults: {
      shape: _InsightResults
    }
  }
};
