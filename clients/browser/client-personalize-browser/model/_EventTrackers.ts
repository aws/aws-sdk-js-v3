import { List as _List_ } from "@aws-sdk/types";
import { _EventTrackerSummary } from "./_EventTrackerSummary";

export const _EventTrackers: _List_ = {
  type: "list",
  member: {
    shape: _EventTrackerSummary
  }
};
