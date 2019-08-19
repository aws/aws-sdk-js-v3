import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLoadBalancerTlsCertificatesInput: _Structure_ = {
  type: "structure",
  required: ["loadBalancerName"],
  members: {
    loadBalancerName: {
      shape: {
        type: "string"
      }
    }
  }
};
