import { Map as _Map_ } from "@aws-sdk/types";
import { _IdentityMailFromDomainAttributes } from "./_IdentityMailFromDomainAttributes";

export const _MailFromDomainAttributes: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _IdentityMailFromDomainAttributes
  }
};
