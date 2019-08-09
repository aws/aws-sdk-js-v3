import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachLoadBalancerTlsCertificateInput: _Structure_ = {
  type: "structure",
  required: ["loadBalancerName", "certificateName"],
  members: {
    loadBalancerName: {
      shape: {
        type: "string"
      }
    },
    certificateName: {
      shape: {
        type: "string"
      }
    }
  }
};
