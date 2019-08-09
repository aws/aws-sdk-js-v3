import { List as _List_ } from "@aws-sdk/types";
import { _PlayerLatencyPolicy } from "./_PlayerLatencyPolicy";

export const _PlayerLatencyPolicyList: _List_ = {
  type: "list",
  member: {
    shape: _PlayerLatencyPolicy
  }
};
