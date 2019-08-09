import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancerTlsCertificateSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    isAttached: {
      shape: {
        type: "boolean"
      }
    }
  }
};
