import { List as _List_ } from "@aws-sdk/types";
import { _RoutingProfileSummary } from "./_RoutingProfileSummary";

export const _RoutingProfileSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _RoutingProfileSummary
  }
};
