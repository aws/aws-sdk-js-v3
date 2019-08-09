import { List as _List_ } from "@aws-sdk/types";
import { _ElasticLoadBalancer } from "./_ElasticLoadBalancer";

export const _ElasticLoadBalancers: _List_ = {
  type: "list",
  member: {
    shape: _ElasticLoadBalancer
  }
};
