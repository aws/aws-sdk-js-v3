import { List as _List_ } from "@aws-sdk/types";
import { _LoadBalancerAttribute } from "./_LoadBalancerAttribute";

export const _LoadBalancerAttributes: _List_ = {
  type: "list",
  member: {
    shape: _LoadBalancerAttribute
  }
};
