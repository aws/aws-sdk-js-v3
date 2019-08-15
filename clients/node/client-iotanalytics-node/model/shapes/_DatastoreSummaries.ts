import { List as _List_ } from "@aws-sdk/types";
import { _DatastoreSummary } from "./_DatastoreSummary";

export const _DatastoreSummaries: _List_ = {
  type: "list",
  member: {
    shape: _DatastoreSummary
  }
};
