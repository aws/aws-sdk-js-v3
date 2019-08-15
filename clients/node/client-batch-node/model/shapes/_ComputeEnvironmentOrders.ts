import { List as _List_ } from "@aws-sdk/types";
import { _ComputeEnvironmentOrder } from "./_ComputeEnvironmentOrder";

export const _ComputeEnvironmentOrders: _List_ = {
  type: "list",
  member: {
    shape: _ComputeEnvironmentOrder
  }
};
