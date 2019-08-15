import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetLoadBalancerListenerSSLCertificateInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName", "LoadBalancerPort", "SSLCertificateId"],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    LoadBalancerPort: {
      shape: {
        type: "integer"
      }
    },
    SSLCertificateId: {
      shape: {
        type: "string"
      }
    }
  }
};
