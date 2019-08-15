import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AppCookieStickinessPolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
