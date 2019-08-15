import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLBCookieStickinessPolicyInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName", "PolicyName"],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    PolicyName: {
      shape: {
        type: "string"
      }
    },
    CookieExpirationPeriod: {
      shape: {
        type: "integer"
      }
    }
  }
};
