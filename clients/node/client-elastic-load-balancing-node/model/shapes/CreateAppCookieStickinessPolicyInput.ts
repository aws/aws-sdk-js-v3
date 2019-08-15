import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAppCookieStickinessPolicyInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName", "PolicyName", "CookieName"],
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
    CookieName: {
      shape: {
        type: "string"
      }
    }
  }
};
