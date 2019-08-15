import { List as _List_ } from "@aws-sdk/types";
import { _GatewayGroupSummary } from "./_GatewayGroupSummary";

export const _GatewayGroupSummaries: _List_ = {
  type: "list",
  member: {
    shape: _GatewayGroupSummary
  }
};
