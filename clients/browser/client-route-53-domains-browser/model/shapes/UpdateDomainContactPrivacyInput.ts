import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDomainContactPrivacyInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    AdminPrivacy: {
      shape: {
        type: "boolean"
      }
    },
    RegistrantPrivacy: {
      shape: {
        type: "boolean"
      }
    },
    TechPrivacy: {
      shape: {
        type: "boolean"
      }
    }
  }
};
