import { _LoadBalancerTlsCertificateList } from "./_LoadBalancerTlsCertificateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLoadBalancerTlsCertificatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    tlsCertificates: {
      shape: _LoadBalancerTlsCertificateList
    }
  }
};
