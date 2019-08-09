import { _MailFromDomainAttributes } from "./_MailFromDomainAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIdentityMailFromDomainAttributesOutput: _Structure_ = {
  type: "structure",
  required: ["MailFromDomainAttributes"],
  members: {
    MailFromDomainAttributes: {
      shape: _MailFromDomainAttributes
    }
  }
};
