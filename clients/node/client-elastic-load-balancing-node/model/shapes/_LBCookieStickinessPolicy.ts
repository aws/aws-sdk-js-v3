import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LBCookieStickinessPolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
