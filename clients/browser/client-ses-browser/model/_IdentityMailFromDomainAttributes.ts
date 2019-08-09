import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IdentityMailFromDomainAttributes: _Structure_ = {
  type: "structure",
  required: ["MailFromDomain", "MailFromDomainStatus", "BehaviorOnMXFailure"],
  members: {
    MailFromDomain: {
      shape: {
        type: "string"
      }
    },
    MailFromDomainStatus: {
      shape: {
        type: "string"
      }
    },
    BehaviorOnMXFailure: {
      shape: {
        type: "string"
      }
    }
  }
};
