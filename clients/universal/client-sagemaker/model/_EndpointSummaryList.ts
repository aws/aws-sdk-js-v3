import { List as _List_ } from "@aws-sdk/types";
import { _EndpointSummary } from "./_EndpointSummary";

export const _EndpointSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _EndpointSummary
  }
};
