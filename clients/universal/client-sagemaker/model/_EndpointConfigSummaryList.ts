import { List as _List_ } from "@aws-sdk/types";
import { _EndpointConfigSummary } from "./_EndpointConfigSummary";

export const _EndpointConfigSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _EndpointConfigSummary
  }
};
