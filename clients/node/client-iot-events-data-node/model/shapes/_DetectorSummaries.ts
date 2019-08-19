import { List as _List_ } from "@aws-sdk/types";
import { _DetectorSummary } from "./_DetectorSummary";

export const _DetectorSummaries: _List_ = {
  type: "list",
  member: {
    shape: _DetectorSummary
  }
};
