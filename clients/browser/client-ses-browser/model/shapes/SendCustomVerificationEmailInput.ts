import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendCustomVerificationEmailInput: _Structure_ = {
  type: "structure",
  required: ["EmailAddress", "TemplateName"],
  members: {
    EmailAddress: {
      shape: {
        type: "string"
      }
    },
    TemplateName: {
      shape: {
        type: "string"
      }
    },
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    }
  }
};
