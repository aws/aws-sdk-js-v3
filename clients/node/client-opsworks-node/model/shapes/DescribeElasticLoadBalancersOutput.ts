import { _ElasticLoadBalancers } from "./_ElasticLoadBalancers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeElasticLoadBalancersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ElasticLoadBalancers: {
      shape: _ElasticLoadBalancers
    }
  }
};
