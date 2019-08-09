import { List as _List_ } from "@aws-sdk/types";
import { _LoadBalancerAddress } from "./_LoadBalancerAddress";

export const _LoadBalancerAddresses: _List_ = {
  type: "list",
  member: {
    shape: _LoadBalancerAddress
  }
};
