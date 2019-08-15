import { List as _List_ } from "@aws-sdk/types";
import { _PlayerLatency } from "./_PlayerLatency";

export const _PlayerLatencyList: _List_ = {
  type: "list",
  member: {
    shape: _PlayerLatency
  }
};
