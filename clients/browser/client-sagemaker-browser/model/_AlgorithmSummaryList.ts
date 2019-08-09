import { List as _List_ } from "@aws-sdk/types";
import { _AlgorithmSummary } from "./_AlgorithmSummary";

export const _AlgorithmSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _AlgorithmSummary
  }
};
