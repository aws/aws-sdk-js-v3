import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetIdentityMailFromDomainInput: _Structure_ = {
  type: "structure",
  required: ["Identity"],
  members: {
    Identity: {
      shape: {
        type: "string"
      }
    },
    MailFromDomain: {
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
