import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLoadBalancerTlsCertificateInput: _Structure_ = {
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
    },
    force: {
      shape: {
        type: "boolean"
      }
    }
  }
};
