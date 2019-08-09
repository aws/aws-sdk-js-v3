import { _CookiePreference } from "./_CookiePreference";
import { _Headers } from "./_Headers";
import { _QueryStringCacheKeys } from "./_QueryStringCacheKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ForwardedValues: _Structure_ = {
  type: "structure",
  required: ["QueryString", "Cookies"],
  members: {
    QueryString: {
      shape: {
        type: "boolean"
      }
    },
    Cookies: {
      shape: _CookiePreference
    },
    Headers: {
      shape: _Headers
    },
    QueryStringCacheKeys: {
      shape: _QueryStringCacheKeys
    }
  }
};
