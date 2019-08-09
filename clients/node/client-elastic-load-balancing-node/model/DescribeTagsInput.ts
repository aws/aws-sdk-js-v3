import { _LoadBalancerNamesMax20 } from "./_LoadBalancerNamesMax20";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTagsInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerNames"],
  members: {
    LoadBalancerNames: {
      shape: _LoadBalancerNamesMax20
    }
  }
};
