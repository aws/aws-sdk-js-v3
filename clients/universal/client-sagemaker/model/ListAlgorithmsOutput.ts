import { _AlgorithmSummaryList } from "./_AlgorithmSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAlgorithmsOutput: _Structure_ = {
  type: "structure",
  required: ["AlgorithmSummaryList"],
  members: {
    AlgorithmSummaryList: {
      shape: _AlgorithmSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
