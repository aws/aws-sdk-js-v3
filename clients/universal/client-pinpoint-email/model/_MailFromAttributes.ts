import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MailFromAttributes: _Structure_ = {
  type: "structure",
  required: ["MailFromDomain", "MailFromDomainStatus", "BehaviorOnMxFailure"],
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
    BehaviorOnMxFailure: {
      shape: {
        type: "string"
      }
    }
  }
};
