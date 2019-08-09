import { _CookieNames } from "./_CookieNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CookiePreference: _Structure_ = {
  type: "structure",
  required: ["Forward"],
  members: {
    Forward: {
      shape: {
        type: "string"
      }
    },
    WhitelistedNames: {
      shape: _CookieNames
    }
  }
};
