import { List as _List_ } from "@aws-sdk/types";
import { _LoadBalancerDescription } from "./_LoadBalancerDescription";

export const _LoadBalancerDescriptions: _List_ = {
  type: "list",
  member: {
    shape: _LoadBalancerDescription
  }
};
