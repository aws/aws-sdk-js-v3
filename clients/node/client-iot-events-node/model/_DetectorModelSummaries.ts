import { List as _List_ } from "@aws-sdk/types";
import { _DetectorModelSummary } from "./_DetectorModelSummary";

export const _DetectorModelSummaries: _List_ = {
  type: "list",
  member: {
    shape: _DetectorModelSummary
  }
};
