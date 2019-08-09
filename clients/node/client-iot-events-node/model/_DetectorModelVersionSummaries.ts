import { List as _List_ } from "@aws-sdk/types";
import { _DetectorModelVersionSummary } from "./_DetectorModelVersionSummary";

export const _DetectorModelVersionSummaries: _List_ = {
  type: "list",
  member: {
    shape: _DetectorModelVersionSummary
  }
};
