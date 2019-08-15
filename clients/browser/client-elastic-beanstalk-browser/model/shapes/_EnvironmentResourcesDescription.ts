import { _LoadBalancerDescription } from "./_LoadBalancerDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnvironmentResourcesDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoadBalancer: {
      shape: _LoadBalancerDescription
    }
  }
};
