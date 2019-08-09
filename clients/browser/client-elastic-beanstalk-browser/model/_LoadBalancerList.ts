import { List as _List_ } from "@aws-sdk/types";
import { _LoadBalancer } from "./_LoadBalancer";

export const _LoadBalancerList: _List_ = {
  type: "list",
  member: {
    shape: _LoadBalancer
  }
};
