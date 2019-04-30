import { _SamplingStatisticSummaryList } from "./_SamplingStatisticSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSamplingStatisticSummariesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SamplingStatisticSummaries: {
      shape: _SamplingStatisticSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
